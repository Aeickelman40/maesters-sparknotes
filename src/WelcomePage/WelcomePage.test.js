import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import '../ApiCalls'
import '@testing-library/jest-dom'
import WelcomePage from './WelcomePage';

jest.mock('../apiCalls')

describe( 'WelcomePage', () => {

  it('Should render the WelcomePage component', () => {
    const { getByText, getByRole } = render(<MemoryRouter><WelcomePage /></MemoryRouter>);
    const headerText = getByText('Sparknotes for Junior Maesters');
    const greetingText = getByText("Don't have time to read volumes of old books in Kings Landing?");
    const enterButton = getByRole('button');
    expect(headerText).toBeInTheDocument();
    expect(greetingText).toBeInTheDocument();
    expect(enterButton).toBeInTheDocument();
  })
})