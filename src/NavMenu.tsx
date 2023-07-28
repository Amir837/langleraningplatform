/* Navigation menu as a functional component */

import './css/NavMenu.css';

interface NavMenuProps {
    /* In feature it should be a map */
    currentPage: string;
}

function NavMenu(props: NavMenuProps) {
    return (
        <nav>
            <header>
                <h1><a href=".">{props.currentPage}</a></h1>
            </header>
            <div className="slide-out-text">
                <span>
                    <h5>rely only on yourself</h5>
                </span>
            </div>
            <div className="menuBar">
                <ul className="menuUl">
                    <li className={`menuUl-item ${props.currentPage=="Home" ? "menuUl-active-item" : ""}`}><a className="menuUl-link  temp-size" href="">Home</a></li>
                    <li className={`menuUl-item ${props.currentPage=="Home" ? "menuUl-active-item" : ""}`}><a className="menuUl-link menuUl-active-link  temp-size" href="">Practice</a></li>
                    <li className={`menuUl-item ${props.currentPage=="Home" ? "menuUl-active-item" : ""}`}><a className="menuUl-link  temp-size" href="">About</a></li>
                    <li className={`menuUl-item ${props.currentPage=="Home" ? "menuUl-active-item" : ""}`}><a className="menuUl-link  temp-size" href="">Contact</a></li>
                </ul>
            </div>
        </nav>
    );
}

export { NavMenu };