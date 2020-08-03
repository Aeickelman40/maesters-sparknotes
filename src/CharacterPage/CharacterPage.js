import React from 'react';
import './CharacterPage.css';
import { NavLink } from 'react-router-dom';


const CharacterPage = ({ characters }) => {
    // console.log(characters)
    const charMap = characters.map((character) => {
        let characterId = character.url.split('').pop();
        console.log(characterId)
        return (
            <NavLink to = {`/CharacterSelection/${characterId}`}
                    id = {characterId}> 
                <p>Character Name: {character.name}</p>
            </NavLink>
        )     
    })
    return (
        <section className = "selection-main">
            <h1
            data-testid="character-selection-render"
            >{charMap}</h1>
        </section>
    )
}

export default CharacterPage;

