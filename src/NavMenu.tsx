/* Navigation menu as a functional component */
import React from 'react';
import { Link } from 'react-router-dom';

import './css/NavMenu.css';

interface NavMenuProps {
    /* In feature it should be a map */
    currentPage: string;
}

function NavMenu(props: NavMenuProps) {
    var f = "/" + `${props.currentPage}`;
    if (props.currentPage === "Home") f = "/";
    return (
        <nav>
            <header>
                <h1><Link to={f}>{props.currentPage}</Link></h1>
            </header>

            <div className="menuBar">
                <ul className="menuUl">
                <li className={`menuUl-item ${props.currentPage === "Home" ? "menuUl-active-link" : "menuUl-active-item"}`}>
                    <Link className="menuUl-link temp-size" to="/">Home</Link>
                </li>
                <li className={`menuUl-item ${props.currentPage === "Practice" ? "menuUl-active-link" : "menuUl-active-item"}`}>
                    <Link className="menuUl-link temp-size" to="/Practice">Practice</Link>
                </li>
                <li className={`menuUl-item ${props.currentPage === "About" ? "menuUl-active-link" : "menuUl-active-item"}`}>
                    <Link className="menuUl-link temp-size" to="/About">About</Link>
                </li>
                <li className={`menuUl-item ${props.currentPage === "Contact" ? "menuUl-active-link" : "menuUl-active-item"}`}>
                    <Link className="menuUl-link temp-size" to="/Contact">Contact</Link>
                </li>
                </ul>
            </div>
        </nav>
    );
}

export { NavMenu };