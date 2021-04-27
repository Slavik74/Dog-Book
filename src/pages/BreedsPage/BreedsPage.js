import React from 'react';
import { Container} from 'react-bootstrap';
import BreedMenuBar from './../../components/BreedMenuBar/BreedMenuBar';
import { useState, useEffect } from 'react';
import axios from 'axios';
import BreedModel from './../../model/BreedModel';
import MasonryBreedCards from './../../components/MasonryBreedCards/MasonryBreedCards';

function BreedsPage() {

    const [breeds, setBreeds] = useState([]);
    const [changeImages, setChangeImages] = useState(false)

    useEffect(() => {        
        axios.get("https://dog.ceo/api/breeds/list/all").then(res => {
            setBreeds(Object.keys(res.data.message).map((name, index) => new BreedModel(index,name)));
        });
    }, []);
    
    const handleFilter = event => {
        const filterText=event.target.value; 
        setFilterText(filterText); 
    }


    //Filter  
    const [filterText, setFilterText] = useState("");
    const breedsFiltered = breeds.filter(function (breed) {
        return !filterText || breed.name.toLowerCase().includes(filterText.toLowerCase());
    });


    return (
        <div className="p-breads">
            <Container>
                <BreedMenuBar filterText={filterText}  
                              handleFilter={handleFilter} 
                              handleChangeImages={() => setChangeImages(!changeImages)} />

                <Container>
                    <MasonryBreedCards breedsList={breedsFiltered} changeImage={changeImages} />
                </Container>

            </Container>
        </div>
    );
    
}

export default BreedsPage;