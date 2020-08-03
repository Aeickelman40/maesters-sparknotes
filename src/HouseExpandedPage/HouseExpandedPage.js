import React from 'react';

// import Shoes from '../Shoes/Shoes';
import './HouseExpandedPage.css';
import CommentForm from '../CommentForm/CommentForm';
// import './mediaQuery.css';

const HouseExpandedPage = ({ ...house }) => {
    console.log(house)
    return (
        <section className = "expanded-main">
            <h1>House Expanded main</h1>
            <p>{house.houseId}</p>
            <p></p>
            <CommentForm />
        </section>
    )
}

export default HouseExpandedPage;