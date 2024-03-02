import { Link, NavLink } from "react-router-dom";
import { IoMenuOutline as MenuIcon } from 'react-icons/io5'
import { Links } from '../data/data'
import Sidebar from "./sidebar";
import { useState } from "react";
import Logo from "./logo";
function Header() {
    const [isOpen, setIsOpen] = useState(false)

    const openSidebar = () => {
        setIsOpen(true)
    }

    const closeSidebar = () => {
        setIsOpen(false)
    }
    return (
        <>
            <div className="navbar">
                <Logo />
                <ul className="navbar-list">
                    {/* <NavLink to="/" className="list">A Propos</NavLink>
                    <NavLink to="/projet" className="list">Mes Projets</NavLink>
                    <NavLink to="/contact" className="contact">Contact</NavLink> */}
                    {Links.map((link) => (
                        <NavLink key={link.name} to={link.to} className="list">{link.name}</NavLink>
                    ))}
                </ul>
                <div className="menuButton" onClick={openSidebar}>
                    <MenuIcon size={40} />
                </div>
                <Sidebar isOpen={isOpen} closeSidebar={closeSidebar}/>
            </div>
        </>
    )
}
export default Header;