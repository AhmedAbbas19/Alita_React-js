import React from 'react'
import {NavLink} from 'react-router-dom'
import './Navbar.css'
const Navbar = () =>{
    return (
        <div className="nav">
            <div className="container text-center">
            <i className="fa fa-bars fa-2x"></i>
                <ul className="list-unstyled">
                    <NavLink exact={true} to="/" activeClassName='active'><li>Home</li></NavLink>
                    <NavLink to="/about"><li>About</li></NavLink>
                    <NavLink to="/portfolio"><li>Portfolio</li></NavLink>
                    <NavLink to="/codes"><li>Codes</li></NavLink>
                    <NavLink to="/contact"><li>Contacts</li></NavLink>
                </ul>
            </div>
        </div>
    )
}
export default Navbar