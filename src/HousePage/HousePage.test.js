import React from 'react';
import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import '../ApiCalls'
import '@testing-library/jest-dom'
import HousePage from './HousePage';

jest.mock('../apiCalls')

describe( 'HousePage', () => {

    it('Should render the HousePage component', () => {
       const { getByText } = render(<MemoryRouter><HousePage /></MemoryRouter>);
       const mainText = getByText('House main');
       expect(mainText).toBeInTheDocument();
    })

})