import React from 'react';
import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import '../ApiCalls'
import '@testing-library/jest-dom'
import HouseExpandedPage from './HouseExpandedPage';

jest.mock('../apiCalls')

describe( 'HouseExpandedPage', () => {

    it('Should render the HouseExpandedPage component', () => {
    const { getByText } = render(<MemoryRouter><HouseExpandedPage /></MemoryRouter>);
    const nameText = getByText('House Name:');
    const regionText = getByText('Region:');
    const titlesText = getByText('House Titles:');
    const mottoText = getByText('House Motto:');
    const powerLocationText = getByText('Current Locations of Power:')
    expect(nameText).toBeInTheDocument();
    expect(regionText).toBeInTheDocument();
    expect(titlesText).toBeInTheDocument();
    expect(mottoText).toBeInTheDocument();
    expect(powerLocationText).toBeInTheDocument();
    })      
})
