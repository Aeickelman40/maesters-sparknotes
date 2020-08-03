import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import '../ApiCalls'
import '@testing-library/jest-dom'
import CommentForm from './CommentForm';

jest.mock('../apiCalls')

describe( 'CommentForm', () => {

    it('Should render the CommentForm component', () => {
        const { getByPlaceholderText, getByRole } = render(<MemoryRouter><CommentForm /></MemoryRouter>);
        const authorInput = getByPlaceholderText('Author');
        const commentInput = getByPlaceholderText('Comment');
        const submitButton = getByRole('button');
        expect(authorInput).toBeInTheDocument();
        expect(commentInput).toBeInTheDocument();
        expect(submitButton).toBeInTheDocument();
    })
})

    // it('Should know an input\'s value', () => {
    //     const { getByPlaceholderText } = render(<MemoryRouter><SubmitShoeForm /></MemoryRouter>)
    //     const brandInput = getByPlaceholderText('BRAND');
    //     const colorInput = getByPlaceholderText('COLOR');
    //     const priceInput = getByPlaceholderText('Price (in dollars)');
    //     const modelInput = getByPlaceholderText('MODEL');

    //     fireEvent.change(brandInput, { target: { value: "NIKE" }})
    //     fireEvent.change(colorInput, { target: { value: "red" }})
    //     fireEvent.change(priceInput, { target: { value: 200 }})
    //     fireEvent.change(modelInput, { target: { value: "13" }})


    //     expect(brandInput).toBeInTheDocument()
    //     expect(colorInput).toBeInTheDocument()
    //     expect(priceInput).toBeInTheDocument()
    //     expect(modelInput).toBeInTheDocument()
    // });

    // it('Should be able to submit a shoe', () => {
    //     const { getByText } = render(<MemoryRouter><SubmitShoeForm /></MemoryRouter>)
    
    //     const submitSneaker = getByText('Submit Sneaker')
    //     fireEvent.click(submitSneaker)

    //     const successSubmitting = getByText("Submission has been added")
    //     const submitAnotherShoe = getByText("Submit another shoe")

    //     expect(successSubmitting).toBeInTheDocument();
    //     expect(submitAnotherShoe).toBeInTheDocument();

    // });