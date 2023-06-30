import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./style.css";
import axios from "axios";

export default function HostVans(){
    const [hostVans, setHostVans] = useState(null);
    const app = axios.create({
        baseURL: 'http://localhost:5173/api/',
        timeout: 1000,
        headers: {'Content-Type': 'Application/json'}
    });

    useEffect(() => {
        try {
            async function getData(){
                const response = await app.get("/vans");
                const data = await response.data.vans;
                setHostVans(data.slice(0, 3));
            }
            getData();
        } catch (error) {
            
        }
    }, []);

    return(
        <div className="host-vans-container">
            <h1 className="host-vans-container__title">Your listed vans</h1>
            <ul className="host-vans-container__list">
                {hostVans && hostVans.map((item) => {
                    return(
                        <Link to={`/host/vans/${item.id}`}>
                            <li className="host-vans-container__list__item">
                                <img src={item.imageUrl} alt="Vans image" className="host-vans-container__list__item__image"/>
                                <div className="host-vans-container__list__item__text">
                                    <p className="host-vans-container__list__item__name">{item.name}</p>
                                    <p className="host-vans-container__list__item__price">${item.price}/day</p>
                                </div>
                            </li>
                        </Link>
                    )
                })}
            </ul>
        </div>
    )
}