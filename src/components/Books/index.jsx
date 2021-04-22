import React from 'react';
import styled from 'styled-components';
import Book from '../Book';

const ContentContainer = styled.div`
    width: 100%;
    margin-top: 40px;
    margin-bottom: calc(59px + 50px);
    padding-left: 20px;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: flex-start;
    flex-wrap: wrap;
`;

export default function Books(props) {
    const { books } = props;

    return (
        <ContentContainer>
            {books.map((book, index) => <Book key={book.id} book={book} />)}
        </ContentContainer>
    );
}