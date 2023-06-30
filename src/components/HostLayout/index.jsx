import "./style.css";
import { Outlet, NavLink } from "react-router-dom"

export default function HostLayout(){
    return(
        <div className="host-layout">
            <nav className="host-nav">
                <ul className="host-nav__list">
                    <li className="host-nav__list__item"><NavLink to="/host" end className={({isActive}) => isActive ? "selected" : null } >Dashboard</NavLink></li>
                    <li className="host-nav__list__item"><NavLink to="/host/income" className={({isActive}) => isActive ? "selected" : null } >Income</NavLink></li>
                    <li className="host-nav__list__item"><NavLink to="/host/vans" className={({isActive}) => isActive ? "selected" : null } >Vans</NavLink></li>
                    <li className="host-nav__list__item"><NavLink to="/host/reviews" className={({isActive}) => isActive ? "selected" : null } >Reviews</NavLink></li>
                </ul>
            </nav>
            <Outlet />
        </div>
    )
}