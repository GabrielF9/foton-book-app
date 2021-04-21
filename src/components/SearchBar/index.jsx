import styled from "styled-components";

import { ReactComponent as SearchIcon } from '../../assets/search.svg';

const SearchContainer = styled.div`
display: flex;
flex-direction: row;
justify-content: flex-start;
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
border: none;
outline: none;
font-size: 16px;
line-height: 18px;
color: #54565A;
/* background-color: #FDFCFC; */
background-color: #FFFFFF;
`;

export default function SearchBar() {
    return (
        <SearchContainer>
            <SearchIcon />
            <SearchInput placeholder='Search book' />
        </SearchContainer>
    );
}