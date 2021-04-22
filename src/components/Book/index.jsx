import React from 'react';
import styled from 'styled-components';
import history from '../../helpers/history';

const BookContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    max-width: 105px;
    margin-right: 10px;
    margin-bottom: 12px;
`;

const BookCover = styled.img`
    border-radius: 5px;
    width: 105px;
    height: 153px;
    box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.2);
`;

const BookTitle = styled.div`
    margin-top: 9px;
    font-weight: bold;
    font-size: 12px;
    line-height: 14px;
    color: rgba(49, 49, 49, 0.8);
`;

const BookAuthor = styled.div`
    margin-top: 5px;
    font-family: 'Roboto', sans-serif;
    font-weight: 900;
    font-size: 10px;
    line-height: 12px;
    color: rgba(49, 49, 49, 0.8);
`;

export default function Book(props) {
    const { book } = props;

    const goToBookDetails = () => {
        history.push(`/details/${book.id}`);
    }

    return (
        <BookContainer onClick={goToBookDetails}>
            {book.volumeInfo.imageLinks && <BookCover src={book.volumeInfo.imageLinks.thumbnail} alt={book.volumeInfo.title} />}
            <BookTitle>{book.volumeInfo.title}</BookTitle>
            {
                book.volumeInfo.authors && <BookAuthor>by {book.volumeInfo.authors[0]}</BookAuthor>
            }
        </BookContainer>
    );
}