import "./style.css"
import Arrow from "../../../assets/arrow.png"
import { Link, useParams } from "react-router-dom"
import { useEffect } from "react"
import axios from "axios"


export default function VanDetail({ selectedVan, setSelectedVan }){
    const app = axios.create({
        baseURL: 'http://localhost:5173/api/',
        timeout: 1000,
        headers: {'Content-Type': 'Application/json'}
    });
    const { id } = useParams();
    
    useEffect(() => {
        try {
            async function getData(){
                const response = await app.get(`/vans/${id}`);
                const vans = await response.data.vans;

                setSelectedVan((prevState) => {
                    return prevState = {...vans};
                });
            }
            getData();
        } catch (error) {
            console.log(error.message);
        }
    }, []);

    return (
        <div className="vans-main">
            <div className="goback">
                <Link to="/vans" className="goback__link">
                    <img src={Arrow} alt="Arrow Image" className="goback__image" />
                    <p className="goback__text">Back to all vans</p>
                </Link>
            </div>
            
            {selectedVan && <div className="selected-van">
                <img src={selectedVan.imageUrl} alt="Van's Image" className="selected-van__image"/>
                <p className="selected-van__type">{selectedVan.type}</p>
                <h1 className="selected-van__name">{selectedVan.name}</h1>
                <p className="selected-van__price"><strong>${selectedVan.price}</strong>/day</p>
                <p className="selected-van__description">{selectedVan.description}</p>
                <button className="selected-van__button">Rent this van</button>
            </div>}
        </div>
        

    )
}