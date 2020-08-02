import React from 'react';
import './HousePage.css';
import { NavLink } from 'react-router-dom';

const HousePage = ({ houses }) => {
    console.log(houses)
    let houseId;
    const houseMap = houses.map((house) => {
         houseId = house.url.split('').pop();
        return (
            <p>{house.name}, {houseId}</p>
        )  
    })
    return (
        <section className = "selection-main">
            <NavLink to = {`/Houses/${houseId}`}>
              <h1>{houseMap}</h1>
            </NavLink>
        </section>
    )
}

export default HousePage;