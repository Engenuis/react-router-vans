import "./style.css";
import { useOutletContext } from "react-router-dom"

export default function HostVansPricing(){
    const [showVan, setShowVan] = useOutletContext();

    return(
        <p className="vans-price"><strong className="vans-price-bold">${showVan.price}</strong>/day</p>
    )
}