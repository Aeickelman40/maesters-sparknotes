import React from 'react';

// import Shoes from '../Shoes/Shoes';
import './HouseExpandedPage.css';
// import './mediaQuery.css';

const HouseExpandedPage = ({ ...house }) => {
    console.log(house)
    return (
        <section className = "expanded-main">
            <h1>House Expanded main</h1>
            <p>{house.houseId}</p>
            <p></p>
        </section>
    )
}

export default HouseExpandedPage;