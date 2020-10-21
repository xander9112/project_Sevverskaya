import React from "react";

import './style.scss';

export const Banner: React.FC = () => {
    return <div className="ban">
        <div className="banner-content">
            <div className="banner-title">
                Fast. Simple. <br/>
                Professional <br/>
                Headshots.
            </div>
            <div className="banner-text">
                #1 Rated Headshot Photographers.
            </div>
            <div className="banner-button">
                <button>Browse Sessions</button>
            </div>
        </div>
    </div>
};