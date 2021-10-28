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
                        <NavLink to="/" exact activeClassName="active">
                            Home
                        </NavLink>
                    </li>

                    <li className="nav-item">
                        <NavLink to="/About" exact activeClassName="active">
                            About
                        </NavLink>
                    </li>

                    <li className="nav-item">
                        <NavLink to="/Portfolios" exact activeClassName="active">
                            Portfolios
                        </NavLink>
                    </li>

                    <li className="nav-item">
                        <NavLink to="/Blogs" exact activeClassName="active">
                            Blogs
                        </NavLink>
                    </li>

                    <li className="nav-item">
                        <NavLink to="/contact" exact activeClassName="active">
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
