import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import '../ApiCalls'
import '@testing-library/jest-dom'
import OptionPage from './OptionPage';

jest.mock('../apiCalls')

describe( 'OptionPage', () => {
    
    it('Should render the OptionPage component', () => {
        const { getByText } = render(<MemoryRouter><OptionPage /></MemoryRouter>);
        const optionText = getByText('What do you plan on learning today?');
        const houseButton = getByText('Choose by house');
        const characterButton = getByText('Choose by character');
        expect(optionText).toBeInTheDocument();
        expect(houseButton).toBeInTheDocument();
        expect(characterButton).toBeInTheDocument();
    })

    it('Should update the display when the house select button is clicked', () => {
        const mockHouseFetch = jest.fn();
        const { getByText } = render(<MemoryRouter>
            <OptionPage
                getAllHouses = {mockHouseFetch}
            />
        </MemoryRouter>); 
        const houseButton = getByText('Choose by house');
        expect(mockHouseFetch).toHaveBeenCalledTimes(0);
        fireEvent.click(houseButton); 
        // expect(mockHouseFetch).toHaveBeenCalledTimes(1);
    });

    it('Should update the display when the character select button is clicked', () => {
        const mockCharacterFetch = jest.fn();
        const { getByText } = render(<MemoryRouter>
            <OptionPage
                getAllCharacters = {mockCharacterFetch}
            />
        </MemoryRouter>); 
        const houseButton = getByText('Choose by house');
        expect(mockCharacterFetch).toHaveBeenCalledTimes(0)
        fireEvent.click(houseButton);
        // expect(mockCharacterFetch).toHaveBeenCalledTimes(1)     
    })

});    