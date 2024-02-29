import { Link, NavLink } from "react-router-dom";

function NavBar() {
    return (
        <>
            <div className="navbarContent">
                <li className="logo"><a href="#"><span>K</span>evin</a></li>
                <ul className="navbar">
                    <li><a href="#">Accueil</a></li>
                    <li><a href="#">A Propos</a></li>
                    <li><a href="#">Projet</a></li>
                    <li><a href="#">Compétences</a></li>
                    <li><a href="#">Contact</a></li>
                </ul>
            </div>
        </>
    )
}
export default NavBar;