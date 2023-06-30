import "./style.css";
import { NavLink, Link } from "react-router-dom";

export default function Header(){
    return (
        <header className="header">
            <Link to={"/"} className="header__logo">#Vanlife</Link>
            <nav className="nav">
                <ul className="nav__list">
                    <li className="nav__list__item"> <NavLink to="/host" className={({isActive}) => isActive ? "selected" : null } >Host</NavLink> </li>
                    <li className="nav__list__item"> <NavLink to="/about" className={({isActive}) => isActive ? "selected" : null } >About</NavLink> </li>
                    <li className="nav__list__item"> <NavLink to="/vans" className={({isActive}) => isActive ? "selected" : null } >Vans</NavLink> </li>
                </ul>
            </nav>
        </header>
    )
}