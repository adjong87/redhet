import React from 'react';
import { NavLink } from "react-router-dom";
import './TopMenu.css';


function TopMenu() {


    return (
        <nav className="navNav">
            <ul className="navBar">
                <li>
                    <NavLink exact to="/" activeClassName="active-link">
                        Hottest Posts
                    </NavLink>
                </li>
                <li>
                    <NavLink exact to="/" activeClassName="active-link">
                        Reddit
                    </NavLink>
                </li>
                <li>
                    <NavLink to='/subreddit/memes' activeClassName="active-link">
                        Memes
                    </NavLink>
                </li>
            </ul>
        </nav>
    );
}

export default TopMenu;