import React from 'react';
import styled from 'styled-components';

const ContentContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    width: calc(100% - 40px);
    margin-top: 30px;
`;

const ContentTitle = styled.span`
    font-size: 18px;
    line-height: 21.09px;
    letter-spacing: 0.5px;
    font-weight: 500;
    color: #3F4043;
`;

const ContentAction = styled.a`
    font-size: 14px;
    line-height: 16px;
    color: #4ABDF1;
    text-decoration: none;
`;

export default function ContentSection(props) {
    return (
        <ContentContainer>
            <ContentTitle>{props.title}</ContentTitle>
            <ContentAction href='#'>{props.action}</ContentAction>
        </ContentContainer>
    );
}