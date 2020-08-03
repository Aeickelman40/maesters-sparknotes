import React from 'react';
import './HouseExpandedPage.css';
import CommentForm from '../CommentForm/CommentForm';

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