import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import './BreedPage.css';
import { Container} from 'react-bootstrap';
import MasonryImages from './../../components/MasonryImages/MasonryImages';

export default function BreedPage() {

    const { breed } = useParams();
    const [imgList, setImgList] = useState();

      
    useEffect(() => {
        axios.get("https://dog.ceo/api/breed/" + breed + "/images").then(res => {
            const imgs = res.data.message;
            setImgList(imgs);
        });

    },[breed]);



    return (
        imgList ? <div className="p-breed">
                    <div className="display-3 headline">{breed}</div>
                    <Container>
                        <MasonryImages images={ imgList }></MasonryImages>
                    </Container>                        
                  </div> 
                : 
                  <div></div>
    );
}
