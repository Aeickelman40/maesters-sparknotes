import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import '../ApiCalls'
import '@testing-library/jest-dom'
import CharacterExpandedPage from './CharacterExpandedPage';

jest.mock('../apiCalls')

describe( 'CharacterExpandedPage', () => {

    it('Should render the CharacterExpandedPage component', () => {
    const { getByText } = render(<MemoryRouter><CharacterExpandedPage /></MemoryRouter>);
    const mainText = getByText('Character Expanded main');
    expect(mainText).toBeInTheDocument();
    }) 
    
})