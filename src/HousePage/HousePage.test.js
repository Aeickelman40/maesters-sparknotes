// import React from 'react';
// import { render, waitFor } from '@testing-library/react';
// import { MemoryRouter } from 'react-router-dom';
import '@testing-library/jest-dom';
// import HousePage from './HousePage';
import { getAllHouses } from '../apiCalls';

jest.mock('../apiCalls');

describe( 'HousePage', () => {

    it('Should render the HousePage component', () => {
        // const { getByTestId } = render(<MemoryRouter><HousePage /></MemoryRouter>) 
        // const houseArea = getByTestId('house-selection-render');
        // expect(houseArea).toBeInTheDocument();
    })

    it('Should render unique data to the HousePage component', async () => {   
        getAllHouses.mockResolvedValueOnce([
            {
                url: "https://www.anapioficeandfire.com/api/houses/17",
                name: "House Baratheon of Storm's End",
                region: "The Stormlands",
                coatOfArms: "A black crowned stag, on a gold field(Or, a stag salient, crowned, sable)",
                words: "Ours is the Fury",
                titles: [
                    "Lord of Storm's End",
                    "Lord Paramount of the Stormlands"
                ],
                seats: [
                    "Storm's End",
                    "Dragonstone (House Baratheon of Dragonstone)"
                ],
                currentLord: "https://www.anapioficeandfire.com/api/characters/1029",
                heir: "https://www.anapioficeandfire.com/api/characters/775",
                overlord: "https://www.anapioficeandfire.com/api/houses/16",
                founded: "1 AC",
                founder: "https://www.anapioficeandfire.com/api/characters/797",
                diedOut: ""
            }
        ])  
        // const { getByText } = render(<MemoryRouter><HousePage /></MemoryRouter>)
        // const houseNameText = await waitFor(() => getByText("House Name: House Baratheon of Storm's End"))
        // expect(houseNameText).toBeInTheDocument();
    })

})