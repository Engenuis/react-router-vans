import "./style.css";
import Header from "../Header";
import Footer from "../Footer";
import { Outlet } from "react-router-dom"

export default function Layout(){
    return(
        <div className="layout-div">
            <Header />
            <Outlet />
            <Footer />
        </div>
    )
}