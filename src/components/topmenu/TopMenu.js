import React from 'react';
import {NavLink} from "react-router-dom";
import './TopMenu.css';

function TopMenu() {

    return (
        <>
            <div className="outer-container">
                <div className="left-container">
                    {/* left container*/}

                </div>
                <div className="inner-container">
                    <nav className="navNav">
                        <ul className="navBar">
                            <li>
                                <NavLink to="/" activeClassName="active-link">
                                    Hottest Posts
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to="/" activeClassName="active-link">
                                    Reddit
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to="/subreddit/meme" activeClassName="active-link">
                                    Memes
                                </NavLink>
                            </li>
                        </ul>
                    </nav>
                </div>
                <div className="right-container">

                    {/* right container*/}

                </div>
            </div>
            </>
            );
            }

            export default TopMenu;