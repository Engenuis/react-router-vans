import { useState } from "react";
import "./style.css";
import axios from "axios";
import { Link, useLoaderData } from "react-router-dom";

async function getData(){
    const app = axios.create({
        baseURL: 'http://localhost:5173/api/',
        timeout: 1000,
        headers: {'Content-Type': 'Application/json'}
    });

    try {
    const response = await app.get("/vans");
    const vans = await response.data.vans;
    return vans;

    } catch (error) {
        console.log(error.message);
    }
}

export function loader(){
    return getData();
}


export default function Vans(){
    const [filter, setFilter] = useState("");
    const dataVans = useLoaderData();
    const displayedVans = filter ? dataVans.filter((item) => {return item.type === filter}) : dataVans;

    function filterVans(event){
        event.stopPropagation();

        setFilter(event.target.innerText.toLowerCase());
    }

    function clearFilter(){
        setFilter("");
    }

    return (
        <main className="vans-main">
            <div className="vans-filter">
                <h1 className="vans-filter__title">Explore our van options</h1>
                <div className="vans-filter__type">
                    <div className="vans-filter__type__options">
                        <p className="vans-filter__type__option simple" onClick={filterVans}>Simple</p>
                        <p className="vans-filter__type__option luxury" onClick={filterVans}>Luxury</p>
                        <p className="vans-filter__type__option rugged" onClick={filterVans}>Rugged</p>
                    </div>
                    <p className="vans-filter__type__clear" onClick={clearFilter}>Clear filters</p>
                </div>
            </div>

            <ul className="vans-list">
                {displayedVans.map((item) => {
                    return(
                        <li key={item.id} id={item.id} className="vans-list__item">
                            <Link to={`/vans/${item.id}`} >
                                <img src={item.imageUrl} alt="Vans Image" className="vans-list__item__image" />
                                <div className="vans-list__item__information">
                                    <p className="vans-list__item__information__name">{item.name}</p>
                                    <div className="vans-list__item__information__price">
                                        <p className="vans-list__item__information__price-value">{item.price}</p>
                                        <p className="vans-list__item__information__price-text">/day</p>
                                    </div>
                                </div>
                                <button className={`vans-list__item__button-${item.type}`}>{item.type}</button>
                            </Link>
                        </li>
                    )
                })}
            </ul>
        </main>
    )
}