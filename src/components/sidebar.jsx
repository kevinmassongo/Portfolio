import { IoClose as CloseIcon } from 'react-icons/io5'
import { NavLink } from 'react-router-dom';
import { Links } from '../data/data'

const Sidebar = ({ isOpen, closeSidebar}) => {
    return (
        <>
            <div className={`sidebar ${isOpen && "open"}`} >
                <div className="container">
                    <NavLink to="/" className="logo"><span>K</span>evin.</NavLink>
                    <div className="closeButton" onClick={closeSidebar}>
                        <CloseIcon size={40} />
                    </div>
                </div>
                <section>
                    <div className="sidebar-list">
                        {Links.map((link) => (
                            <NavLink key={link.name} to={link.to} className="list">{link.name}</NavLink>
                        ))}
                    </div>
                </section>
            </div>

        </>
    )
}
export default Sidebar;