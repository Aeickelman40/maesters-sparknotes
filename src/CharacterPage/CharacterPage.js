import React from 'react';
import './CharacterPage.css';
import { NavLink } from 'react-router-dom';

const CharacterPage = ({ characters }) => {
    console.log(characters)
    return (
        <section className = "selection-main">
            <h1>Character map</h1>
            {/* <p>{props}</p> */}
            <NavLink to = {"/Characters/:id"}>
                <button>to expanded character</button>
            </NavLink>
        </section>
    )
}

export default CharacterPage;