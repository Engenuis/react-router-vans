import { useState, useEffect } from "react";
import { useParams, Link, NavLink, Outlet } from "react-router-dom";
import Arrow from "../../assets/arrow.png"
import "./style.css";
import axios from "axios";

export default function HostVansDetail(){
    const app = axios.create({
        baseURL: 'http://localhost:5173/api/',
        timeout: 1000,
        headers: {'Content-Type': 'Application/json'}
    });
    const [showVan, setShowVan] = useState(null);
    const { id } = useParams();
    
    useEffect(() => {
        try {
            async function getData(){
                const response = await app.get(`/vans/${id}`);
                const vans = await response.data.vans;

                setShowVan((prevState) => {
                    return prevState = {...vans};
                });
            }
            getData();
        } catch (error) {
            console.log(error.message);
        }
    }, []);

    return(
        <div className="vans-detail-container">
            <Link to="/host/vans" className="back">
                <img src={Arrow} alt="Arrow Back" className="back__image"/>
                <p className="back__text">Back to all vans</p>
            </Link>
            {showVan && <div className="vans-detail">
                <section className="vans-detail-section__information">
                    <img src={showVan.imageUrl} alt="Vans Image" className="vans-detail__image"/>
                    <div className="vans-detail__information">
                        <p className="vans-detail__information__type">{showVan.type}</p>
                        <p className="vans-detail__information__name">{showVan.name}</p>
                        <p className="vans-detail__information__price">${showVan.price}/day</p>
                    </div>
                </section>
                <nav className="vans-detail__nav">
                    <ul className="vans-detail__nav__list">
                        <li className="vans-detail__nav__list__item">
                            <NavLink to={`/host/vans/${id}`} end className={({isActive}) => isActive ? "selected" : null}>Details</NavLink>
                        </li>
                        <li className="vans-detail__nav__list__item">
                            <NavLink to={`/host/vans/${id}/pricing`} className={({isActive}) => isActive ? "selected" : null}>Pricing</NavLink>
                        </li>
                        <li className="vans-detail__nav__list__item">
                            <NavLink to={`/host/vans/${id}/photos`} className={({isActive}) => isActive ? "selected" : null}>Photos</NavLink>
                        </li>
                    </ul>
                    <Outlet context={[showVan, setShowVan]} />
                </nav>
            </div>}
        </div>
    )
}