import "./style.css";
import { useOutletContext } from "react-router-dom";

export default function HostVansDetails(){
    const [showVan, setShowVan] = useOutletContext();
    
    return(
        <div className="van-detail">
            {showVan && <p className="van-detail__name"><strong>Name:</strong> {showVan.name}</p>}
            {showVan && <p className="van-detail__type"><strong>Category:</strong> {showVan.type}</p>}
            {showVan && <p className="van-detail__description"><strong>Description:</strong> {showVan.description}</p>}
            {showVan && <p className="van-detail__public"><strong>Visibility:</strong> Public</p>}
        </div>
    )
}