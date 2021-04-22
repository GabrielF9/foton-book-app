import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import Books from '../../components/Books';
import Loading from '../../components/Loading';
import { getAllBooks } from '../../services/books.services';

const SearchContainer = styled.div`
    margin-top: 40px;
`;

const EnterInfoText = styled.p`
    font-size: 18px;
    color: #54565A;
`;

export default function SearchPage(props) {
    const { searchText } = props;

    const [books, setBooks] = useState(null);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        if (searchText) {
            setBooks(null);
            setLoading(true);
            getAllBooks(searchText)
                .then((res) => {
                    console.log(res);
                    setBooks(res.items);

                    setTimeout(() => {
                        setLoading(false);
                    }, 200);
                }).catch((error) => {
                    console.log(error);

                    setTimeout(() => {
                        setLoading(false);
                    }, 200);
                });
        }
    }, [searchText]);

    return (
        <>
            {
                books
                    ? <Books books={books} />
                    : <SearchContainer>
                        {
                            loading
                                ? <Loading />
                                : <EnterInfoText>Press Enter to Search</EnterInfoText>
                        }
                    </SearchContainer>
            }
        </>
    );
}
