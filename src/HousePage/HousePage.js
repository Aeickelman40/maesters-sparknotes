import React from 'react';
import './HousePage.css';
import { NavLink } from 'react-router-dom';

const HousePage = ({ houses }) => {
    console.log(houses)
    const houseMap = houses.map((house) => {
        const houseId = house.url.split('').pop();
        return (
            <p>{house.name}, {houseId}</p>
        )  
    })
    return (
        <section className = "selection-main">
            <NavLink to = {`/Houses/${houses.name}`}>
              <h1>{houseMap}</h1>
            </NavLink>
        </section>
    )
}

export default HousePage;