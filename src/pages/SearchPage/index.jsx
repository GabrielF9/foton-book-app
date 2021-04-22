import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import Books from '../../components/Books';
import Loading from '../../components/Loading';
import { getAllBooks } from '../../services/books.services';

const BooksContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    margin-bottom: calc(59px + 50px);
`;

const SearchContainer = styled.div`
    margin-top: 40px;
`;

const EnterInfoText = styled.p`
    font-size: 18px;
    color: #54565A;
`;

const LoadMore = styled.p`
    align-self: center;
    text-align: center;
    font-size: 18px;
    color: #FF6978;
    font-weight: bold;
    cursor: pointer;
    padding: 8px 12px;
    border: 1px solid #FF6978;
    border-radius: 5px;
`;

export default function SearchPage(props) {
    const { searchText } = props;

    const [books, setBooks] = useState(null);
    const [loading, setLoading] = useState(false);
    const [loadingMore, setLoadingMore] = useState(false);
    const [offset, setOffset] = useState(1);

    const loadMoreBooks = () => {
        setLoadingMore(true);
        getAllBooks(searchText, offset)
            .then((res) => {
                try {

                    let _books = books;
                    _books.push(...res.items);
                    setBooks(_books);
                    setOffset(offset + 1);

                    setTimeout(() => {
                        setLoadingMore(false);
                    }, 200);
                } catch (error) {
                    console.log(error);

                    setTimeout(() => {
                        setLoadingMore(false);
                    }, 200);
                }
            }).catch((error) => {
            });
    }

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
                    ? <BooksContainer>
                        <Books books={books} />
                        {
                            loadingMore
                                ? <Loading />
                                : <LoadMore onClick={loadMoreBooks}>Load more</LoadMore>
                        }
                    </BooksContainer>
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
