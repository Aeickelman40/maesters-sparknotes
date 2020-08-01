import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import '../ApiCalls'
import '@testing-library/jest-dom'
import App from './App';

jest.mock('../apiCalls')

describe( 'App', () => {

  it('Should render the App component', () => {
    const { getByText, getByRole } = render(<MemoryRouter><App /></MemoryRouter>);
    const headerText = getByText('Sparknotes for Junior Maesters');
    const greetingText = getByText("Don't have time to read volumes of old books in Kings Landing?");
    const enterButton = getByRole('button');
    expect(headerText).toBeInTheDocument();
    expect(greetingText).toBeInTheDocument();
    expect(enterButton).toBeInTheDocument();
  })

  it('Should change display when the enter button is clicked', () => {
    const { getByText, getByRole } = render(<MemoryRouter><App /></MemoryRouter>);
    const enterButton = getByRole('button');
    fireEvent.click(enterButton);
    const optionText = getByText('What do you plan on learning today?');
    const houseButton = getByText('Choose by house');
    const characterButton = getByText('Choose by character');
    expect(optionText).toBeInTheDocument();
    expect(houseButton).toBeInTheDocument();
    expect(characterButton).toBeInTheDocument();
  })

})
