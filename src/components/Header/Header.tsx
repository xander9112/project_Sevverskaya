import React from "react";
import {AppBar} from "../AppBar/AppBar";
import {Banner} from "../Banner/Banner";

export const Header: React.FC = () => {
    return <div>
        <AppBar />
        <Banner />
    </div>;
};