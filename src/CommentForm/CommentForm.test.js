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

    it('Should know an input\'s value', () => {
        const { getByPlaceholderText } = render(<MemoryRouter><CommentForm /></MemoryRouter>)
        const authorInput = getByPlaceholderText('Author');
        const commentInput = getByPlaceholderText('Comment');
        fireEvent.change(authorInput, { target: { value: "Alex" }})
        fireEvent.change(commentInput, { target: { value: "Really hope this comment works!" }})
        expect(authorInput).toBeInTheDocument()
        expect(commentInput).toBeInTheDocument()
    });

    it('Should be able to submit a comment', () => {
        const mockSaveComment = jest.fn();
        const { getByPlaceholderText, getByRole } = render(<MemoryRouter>
            <CommentForm 
                saveComment= {mockSaveComment}
            />
        </MemoryRouter>)
        const authorInput = getByPlaceholderText('Author');
        const commentInput = getByPlaceholderText('Comment');
        const submitButton = getByRole('button');
        fireEvent.change(authorInput, { target: { value: "Alex" }})
        fireEvent.change(commentInput, { target: { value: "Really hope this comment works!" }})
        fireEvent.click(submitButton);
        expect(mockSaveComment).toHaveBeenCalledTimes(1)
    })
})
