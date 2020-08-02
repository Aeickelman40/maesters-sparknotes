import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import '../ApiCalls'
import '@testing-library/jest-dom'
import CharacterPage from './CharacterPage';

jest.mock('../apiCalls')

describe( 'CharacterPage', () => {

    it('Should render the CharacterPage component', () => {
    const { getByText } = render(<MemoryRouter><CharacterPage /></MemoryRouter>);
    const mainText = getByText('Character main');
    expect(mainText).toBeInTheDocument();
    }) 
    
})