import React from 'react';
import {Header} from "./components/layout/Header";
import {Map} from "./components/Map/Map";

import './App.css';

export const App = () => {
    return (
        <div className="container">
            <Header></Header>
            <Map/>
        </div>
    );
};