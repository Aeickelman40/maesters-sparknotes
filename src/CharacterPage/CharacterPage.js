import React from 'react';
import './CharacterPage.css';
import { NavLink } from 'react-router-dom';

const CharacterPage = ({ characters }) => {
    console.log(characters)
    const charMap = characters.map((character) => {
        return (
            <p>{character.aliases[0]}</p>
        )  
    })
    
    return (
        <section className = "selection-main">
            <NavLink to = {"/Characters/:id"}>
                <h1>{charMap}</h1>
            </NavLink>
        </section>
    )
}

export default CharacterPage;
