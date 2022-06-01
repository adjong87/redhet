import React from 'react';
import './Header.css'

function Header({title, image}) {
    return (
        <>
            <div className="header-outer-container">
                <div className="left-container">

                    {/* left container*/}

                </div>
                <div className="inner-container">
                    <div className="inner-top-container">
                        {image && <img alt={image} src={image}/>}

                    </div>
                    <div className="inner-bottom-container">
                        <h1>{title}</h1>
                    </div>

                </div>
                <div className="right-container">

                    {/* right container*/}

                </div>
            </div>
        </>
    );
}

export default Header;