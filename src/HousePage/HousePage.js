import React from 'react';
import './HousePage.css';
import { NavLink } from 'react-router-dom';

const HousePage = ({ houses }) => {
    console.log(houses)
    const houseMap = houses.map((house) => {
        return (
            <p>{house.name}</p>
        )  
    })
    return (
        <section className = "selection-main">
            <NavLink to = {"/Houses/:id"}>
              <h1>{houseMap}</h1>
            </NavLink>
        </section>
    )
}

export default HousePage;