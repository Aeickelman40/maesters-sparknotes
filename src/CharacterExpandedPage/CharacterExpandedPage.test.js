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
    const nameText = getByText('Character Name:');
    const aliasText = getByText('Known Aliases:');
    const titlesText = getByText('Given Titles:');
    const birthText = getByText('Date of Birth:');
    expect(nameText).toBeInTheDocument();
    expect(aliasText).toBeInTheDocument();
    expect(titlesText).toBeInTheDocument();
    expect(birthText).toBeInTheDocument();
    })      
})