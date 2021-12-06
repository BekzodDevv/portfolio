import React from 'react';
import avatar from "../img/Avatar.webp";
import { NavLink } from 'react-router-dom'

function Navbar({navClick}) {
    return (
        <div className="navbar">
            <nav className="nav">
                <div className="profile">
                    <img src={avatar} alt="avarat" />
                </div>
                <ul className="nav-items" onClick={navClick}>
                    <li className="nav-item">
                        <NavLink to="/"  activeClassName="active">
                            Home
                        </NavLink>
                    </li>

                    <li className="nav-item">
                        <NavLink to="/About"  activeClassName="active">
                            About
                        </NavLink>
                    </li>

                    <li className="nav-item">
                        <NavLink to="/Certificates"  activeClassName="active">
                        Certificates
                        </NavLink> 
                    </li>

                    <li className="nav-item">
                        <NavLink to="/Portfolios"  activeClassName="active">
                            Portfolios
                        </NavLink>
                    </li>

                    <li className="nav-item">
                        <NavLink to="/Blogs"  activeClassName="active">
                            Blogs
                        </NavLink>
                    </li>

                    <li className="nav-item">
                        <NavLink to="/contact"  activeClassName="active">
                            Contact
                        </NavLink>
                    </li>
                </ul>

                <footer className="footer">
                    <p>
                        @2021 Bekzod Dev
                    </p>
                </footer>

            </nav>


        </div>

    )
}

export default Navbar
