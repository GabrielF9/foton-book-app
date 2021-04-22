import styled from "styled-components";

export const HomeContainer = styled.div`
    height: 100vh;
    width: 100%;
    background-color: #FFFCF9;
    z-index: 2;
`;

export const ContentContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    overflow-x: hidden;
`;

export const ReviewImage = styled.img`
    width: calc(100% - 40px);
    margin-top: 15px;
    margin-bottom: calc(59px + 50px);
`;

export const HalfPatternCircleImg = styled.img`
    position: absolute;
    right: 0;
    top: 190px;
`;