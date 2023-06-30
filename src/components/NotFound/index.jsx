import "./style.css";
import { Link } from "react-router-dom";

export default function NotFound(){
    return(
        <div className="error-main">
            <h1 className="error-main__title">Sorry, the page you were looking for was not found.</h1>
            <Link to="." className="error-main__button">Return to home</Link>
        </div>
    )
}