import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import '../ApiCalls'
import '@testing-library/jest-dom'
import HouseExpandedPage from './HouseExpandedPage';

jest.mock('../apiCalls')

describe( 'HouseExpandedPage', () => {

    it('Should render the HouseExpandedPage component', () => {
    const { getByText } = render(<MemoryRouter><HouseExpandedPage /></MemoryRouter>);
    // const mainText = getByText('Character main');
    // expect(mainText).toBeInTheDocument();
    }) 
    
})