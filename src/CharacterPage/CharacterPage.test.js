// import React from 'react';
// import { render, waitFor } from '@testing-library/react';
// import { MemoryRouter } from 'react-router-dom';
import '../ApiCalls'
import '@testing-library/jest-dom'
// import CharacterPage from './CharacterPage';
import { getAllCharacters } from '../apiCalls';

jest.mock('../apiCalls')

describe( 'CharacterPage', () => {

    it('Should render the CharacterPage component', () => {
    // const { getByTestId } = render(<MemoryRouter><CharacterPage /></MemoryRouter>);
    // const characterArea = getByTestId('character-selection-render);
    // expect(characterArea).toBeInTheDocument();
    }) 

    it('Should render unique data to the CharacterPage component', async () => {
        getAllCharacters.mockResolvedValueOnce([
            {
                "url": "https://www.anapioficeandfire.com/api/characters/823",
                "name": "Petyr Baelish",
                "gender": "Male",
                "culture": "Valemen",
                "born": "In 268 AC, at the Fingers",
                "died": "",
                "titles": [
                    "Master of coin (formerly)",
                    "Lord Paramount of the Trident",
                    "Lord of Harrenhal",
                    "Lord Protector of the Vale"
                ],
                "aliases": [
                    "Littlefinger"
                ],
                "father": "",
                "mother": "",
                "spouse": "https://www.anapioficeandfire.com/api/characters/688"
            }
        ])
            //  const { getByText } = render(<MemoryRouter><CharacterPage /></MemoryRouter>)
            //  const characterNameText = await waitFor(() => getByText('Character Name: Petyr Baelish'))
            //  expect(characterNameText).toBeInTheDocument();   

    }) 
    
})