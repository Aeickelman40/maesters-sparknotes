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

    // it('Should change display when the house button is clicked', () => {
    //     const { getByText, getByRole } = render(<MemoryRouter><OptionPage /></MemoryRouter>); 
    //     const houseButton = getByText('Choose by house');
    //     fireEvent.click(houseButton);
    //     const mainText = getByText('House main');
    //     expect(mainText).toBeInTheDocument();
    // })

    it('Should change display when the character button is clicked', () => {
        
    })

});    