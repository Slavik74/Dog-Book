import axios from "axios";
import { useEffect, useState } from "react";
import './BreedCard.css';
import { Redirect, useHistory } from 'react-router-dom';
import { Card } from "react-bootstrap";

function BreedCard({breed, changeImage}) {

    const [img, setImg] = useState("https://www.bil-jac.com/Images/DogPlaceholder.svg");
    const [redirectTo, setRedirectTo] = useState("");
    const history = useHistory()

    useEffect(() => {
        axios.get("https://dog.ceo/api/breed/" + breed + "/images/random").then(res => {
            const newImg = res.data.message;
            setImg(newImg);
        });

    },[breed, changeImage]);

    if (redirectTo) {
        return <Redirect to={'/breeds/' + redirectTo}/>
    } else {
        return (
            <Card className ="c-breedcard">
                <Card.Title>{breed}</Card.Title>
                <img src={img} alt={breed} onClick={() => history.push('/breeds/' + breed)} /> 
            </Card>
        );
    }
}

export default BreedCard;