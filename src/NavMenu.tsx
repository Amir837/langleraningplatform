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
        <div className="leftBar">
            <nav>
                <header>
                    <h1><Link to={f}>{props.currentPage}</Link></h1>
                </header>

                <div className="menuBar">
                    <ul className="menuUl">
                    <li className={`menuUl-item ${props.currentPage === "Home" ? "menuUl-active-link" : "menuUl-active-item"}`}>
                        <Link className="menuUl-link temp-size" to="/">Home <span className="temp-notImplemented">(Not Implemented)</span></Link> { /* Home is not implemented yet */ }
                    </li>
                    <li className={`menuUl-item ${props.currentPage === "Practice" ? "menuUl-active-link" : "menuUl-active-item"}`}>
                        <Link className="menuUl-link temp-size" to="/Practice">Practice</Link>
                    </li>
                    <li className={`menuUl-item ${props.currentPage === "About" ? "menuUl-active-link" : "menuUl-active-item"}`}>
                        <Link className="menuUl-link temp-size" to="/Practice">About <span className="temp-notImplemented">(Not Implemented)</span></Link> { /* About is not implemented yet */ }
                    </li>
                    <li className={`menuUl-item ${props.currentPage === "Feedback" ? "menuUl-active-link" : "menuUl-active-item"}`}>
                        <Link className="menuUl-link temp-size" to="/Feedback">Feedback</Link>
                    </li>
                    </ul>
                </div>
            </nav>
        </div>
    );
}

export { NavMenu };