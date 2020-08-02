import React from 'react';
import './HousePage.css';
import { NavLink } from 'react-router-dom';

const HousePage = ({ houses }) => {
    console.log(houses)
    return (
        <section className = "selection-main">
            <h1>House map</h1>
            <NavLink to = {"/Houses/:id"}>
                <button>to house expanded</button>
            </NavLink>
        </section>
    )
}

export default HousePage;