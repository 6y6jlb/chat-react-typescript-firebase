import React from 'react';
import {NavBar} from "../NavBar/NavBar";
import {BrowserRouter} from "react-router-dom";
import AppRoute from "./AppRoute/AppRoute";
import './App.css';

function App() {
    return (
        <BrowserRouter>
            <div>
                <NavBar/>
                <AppRoute/>
            </div>
        </BrowserRouter>
    );
}

export default App;
