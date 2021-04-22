import React from 'react';
import styled from "styled-components";

const SaudationContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    width: calc(100% - 40px);
    margin-top: 30px;
`;

const SaudationHi = styled.span`
    font-size: 24px;
    line-height: 28.64px;
    font-weight: 400;
    color: #54565A;
`;

const SaudationName = styled.span`
    margin-left: 10px;
    font-size: 24px;
    line-height: 28.64px;
    font-weight: 600;
    color: #FF6978;
`;

const SaudationEmoji = styled.span`
    font-size: 24px;
    margin-left: 10px;
`;

export default function Saudation(props) {
    return (
        <SaudationContainer>
            <SaudationHi>Hi,</SaudationHi>
            <SaudationName>{props.name}</SaudationName>
            <SaudationEmoji>👋</SaudationEmoji>
        </SaudationContainer>
    );
}