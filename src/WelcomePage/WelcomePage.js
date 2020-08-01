import React from 'react';
import './WelcomePage.css';
import { NavLink } from 'react-router-dom';

const WelcomePage = () => {
    return (
        <section>
            <h1>Sparknotes for Junior Maesters</h1>
            <p>Don't have time to read volumes of old books in Kings Landing?</p>
            <NavLink to = {"/OptionPage"}>
                <button>Click here to enter!</button>
            </NavLink>
        </section>
    )
}

export default WelcomePage;