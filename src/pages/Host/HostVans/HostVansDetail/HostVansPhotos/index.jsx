import "./style.css";
import { useOutletContext } from "react-router-dom"

export default function HostVansPhotos(){
    const [showVan, setShowVan] = useOutletContext();
    return(
        <img src={showVan.imageUrl} alt="Vans Image" className="vans-image"/>
    )
}