import React from 'react';
import './HousePage.css';
import { NavLink } from 'react-router-dom';

const HousePage = ({ houses }) => {
    console.log(houses)
    const houseMap = houses.map((house) => {
        let houseId = house.url.split('').pop();
        console.log(houseId)
        return (
            <section>
                <NavLink to = {`/HouseSelection/${houseId}`}
                    id = {houseId}>
                    <p>{house.name}</p>
                </NavLink>
            </section>
        )  
    })
    return (
        <section className = "selection-main">       
              <h1>{houseMap}</h1>
        </section>
    )
}

export default HousePage;