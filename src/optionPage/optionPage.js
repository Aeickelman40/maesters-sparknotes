import React from 'react';
import './OptionPage.css';
import { Route, NavLink } from 'react-router-dom';
import CharacterPage from '../CharacterPage/CharacterPage';
import HousePage from '../HousePage/HousePage';

const OptionPage = () => {
    return (
        <section>
            <h1>What do you plan on learning today?</h1>
                <NavLink to = {"/HouseSelection"}>
                    <button>Choose by house</button>
                </NavLink>
                <NavLink to = {"/CharacterSelection"}>
                    <button>Choose by character</button>
                </NavLink>
                <Route
                    exact path = "/HouseSelection"
                    render={() => <HousePage />} />
                <Route
                    exact path = "/CharacterSelection"
                    render={() => <CharacterPage />} />    
        </section>
    )
}

export default OptionPage;