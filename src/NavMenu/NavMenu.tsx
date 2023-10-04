/* Navigation menu as a functional component */
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import './NavMenu.css';

interface NavMenuProps {
    /* In feature it should be a map */
    currentPage: string;
}

function NavMenu(props: NavMenuProps) {
    const [ifopenMenu, setIfopenMenu] = useState<boolean>(false);

    const openMenu = () => {
        setIfopenMenu(!ifopenMenu);
    }

    var f = "/" + `${props.currentPage}`;
    if (props.currentPage === "Home") f = "/";
    return (
        <div className="leftBar">
            <div className="default_navMenu">
                <nav>
                    <header>
                        <h1><Link to={f}>{props.currentPage}</Link></h1>
                    </header>

                    <div className="menuBar">
                        <ul className="menuUl">
                            <li className={`menuUl-item ${props.currentPage === "Home" ? "menuUl-active-link" : "menuUl-active-item"}`}>
                                <Link className="menuUl-link temp-size" to="/">Home <span className="temp-notImplemented">(Not Implemented)</span></Link> { /* Home is not implemented yet */}
                            </li>
                            <li className={`menuUl-item ${props.currentPage === "Practice" ? "menuUl-active-link" : "menuUl-active-item"}`}>
                                <Link className="menuUl-link temp-size" to="/Practice">Practice</Link>
                            </li>
                            <li className={`menuUl-item ${props.currentPage === "About" ? "menuUl-active-link" : "menuUl-active-item"}`}>
                                <Link className="menuUl-link temp-size" to="/Practice">About <span className="temp-notImplemented">(Not Implemented)</span></Link> { /* About is not implemented yet */}
                            </li>
                            <li className={`menuUl-item ${props.currentPage === "Feedback" ? "menuUl-active-link" : "menuUl-active-item"}`}>
                                <Link className="menuUl-link temp-size" to="/Feedback">Feedback</Link>
                            </li>
                        </ul>
                    </div>
                </nav>
            </div>

            <div className="collapsed_navMenu">
            <h1><Link to={f}>{props.currentPage}</Link></h1>
                <button className="mobile-menu " onClick={openMenu}><svg width="24" height="18" xmlns="http://www.w3.org/2000/svg"><path d="M24 16v2H0v-2h24zm0-8v2H0V8h24zm0-8v2H0V0h24z" fill="#FFF" fill-rule="evenodd" /></svg></button>
            </div>

            {ifopenMenu ? (
                <nav>
                    <ul className="menuUl-mobile">
                        <li className={`menuUl-item ${props.currentPage === "Home" ? "menuUl-active-link" : "menuUl-active-item"}`}>
                            <Link className="menuUl-link temp-size" to="/">Home <span className="temp-notImplemented">(Not Implemented)</span></Link> { /* Home is not implemented yet */}
                        </li>
                        <li className={`menuUl-item ${props.currentPage === "Practice" ? "menuUl-active-link" : "menuUl-active-item"}`}>
                            <Link className="menuUl-link temp-size" to="/Practice">Practice</Link>
                        </li>
                        <li className={`menuUl-item ${props.currentPage === "About" ? "menuUl-active-link" : "menuUl-active-item"}`}>
                            <Link className="menuUl-link temp-size" to="/Practice">About <span className="temp-notImplemented">(Not Implemented)</span></Link> { /* About is not implemented yet */}
                        </li>
                        <li className={`menuUl-item ${props.currentPage === "Feedback" ? "menuUl-active-link" : "menuUl-active-item"}`}>
                            <Link className="menuUl-link temp-size" to="/Feedback">Feedback</Link>
                        </li>
                    </ul>
                </nav>
            ) : null}

        </div>
    );
} 

export { NavMenu };