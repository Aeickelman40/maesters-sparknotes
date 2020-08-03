import React from 'react';
import './CharacterExpandedPage.css';
import CommentForm from '../CommentForm/CommentForm';

const CharacterExpandedPage = ({ ...character }) => {
    console.log(character)
    return (
        <section className = "expanded-main">
            <h1>Character Expanded main</h1>
            <p>{character.characterId}</p>
            <CommentForm />
        </section>
    )
}

export default CharacterExpandedPage;