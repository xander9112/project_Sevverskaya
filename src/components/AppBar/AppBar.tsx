import React from "react";

import './styles.scss';

export const AppBar: React.FC = () => {
    return <div className="bar">
        <nav>
            <div className="logo">
                Studio
            </div>
            <div className="menu">
                <ul className="nav-menu">
                    <li><a>Individuals</a></li>
                    <li><a>Companies</a></li>
                    <li><a>The Studio</a></li>
                    <li><a>About Us</a></li>
                    <li><a>Blog</a></li>
                </ul>
            </div>
        </nav>
        <div className="book-now">
        <button>Book Now</button>
        </div>
    </div>;
};
