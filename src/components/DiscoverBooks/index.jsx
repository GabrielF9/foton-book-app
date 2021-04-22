import styled from 'styled-components';
import DiscoverBook from '../DiscoverBook';

const DiscoverContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    align-self: flex-start;
    margin-top: 15px;
    padding-left: 20px;
    overflow-x: auto;
`;

export default function DiscoverBooks(props) {
    return (
        <DiscoverContainer>
            {props.data.map((book, index) => <DiscoverBook key={book.title} book={book} isMainDiscover={index === 0} />)}
        </DiscoverContainer>
    );
}