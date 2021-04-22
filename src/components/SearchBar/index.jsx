import React from 'react';
import styled from "styled-components";

import { ReactComponent as SearchIcon } from '../../assets/search.svg';
import { ReactComponent as CloseIcon } from '../../assets/close.svg';

const SearchContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    width: calc(100% - 40px);
    height: 48px;
    margin-top: 50px;
    padding: 16px;
    border-radius: 10px;
    /* background-color: #FDFCFC; */
    background-color: #FFFFFF;
`;

const SearchInput = styled.input`
    margin-left: 10px;
    margin-right: 10px;
    border: none;
    outline: none;
    font-size: 16px;
    line-height: 18px;
    color: #54565A;
    width: 100%;
    /* background-color: #FDFCFC; */
    background-color: #FFFFFF;
`;

export default function SearchBar(props) {
    const { searchText, onChange, handleEnter } = props;

    const handleEnterKey = (event) => {
        if (event.keyCode === 13) {
            event.preventDefault();
            document.getElementById('search-input').blur();
            handleEnter();
        }
    }

    return (
        <SearchContainer>
            <>
                <SearchIcon />
                <SearchInput
                    id='search-input'
                    placeholder='Search book'
                    value={searchText}
                    onChange={onChange}
                    enterKeyHint='search'
                    onKeyUp={handleEnterKey}
                />
            </>
            {searchText && <CloseIcon onClick={() => onChange('', true)} />}
        </SearchContainer>
    );
}