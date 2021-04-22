import React from 'react';
import styled from "styled-components";

import { ReactComponent as ChartIcon } from '../../assets/chart.svg';
import TriangleImage from '../../assets/triangle.svg';


const DiscoverContainer = styled.div`
    position: relative;
    width: 272px;
    height: ${props => props.isMainDiscover ? '139px' : '128px'};
    border-radius: 5px;
    background-color: ${props => props.bgColor};
    margin-right: 10px;
`;

const ContentContainer = styled.div`
    height: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 20px 15px;
`;

const ContentSection = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-start;
    height: 100%;
`;

const BookInfos = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
`;

const BookTitle = styled.span`
    font-size: 27px;
    line-height: 36px;
    letter-spacing: 2px;
    font-weight: 700;
    font-family: 'Playfair Display', serif;
    color: #FEFEFE;
`;

const BookAuthor = styled.span`
    margin-top: 5px;
    font-size: 14px;
    line-height: 16.41px;
    letter-spacing: 1.29px;
    font-style: italic;
    color: #E7E7E1;
`;

const ReadingNow = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
`;

const ReadingNowText = styled.span`
    margin-left: 2px;
    font-size: 10px;
    line-height: 12px;
    letter-spacing: 0.02px;
    color: #E7E7E1;
`;

const BookImage = styled.img`
    position: absolute;
    right: 20px;
    top: 15px;
    height: 111px;
    border-radius: 5px;
`;

const OpacBorderCircle = styled.div`
    position: absolute;
    top: 14px;
    right: 110px;
    width: 18px;
    height: 18px;
    border-radius: 50%;
    border: 2px solid #4550A7;
`;

const Rectangle = styled.div`
    position: absolute;
    bottom: 28.5px;
    right: 82.2px;
    width: 46px;
    height: 4px;
    transform: rotate(14deg);
    background-color: #EC6374;
`;

const Triangle = styled.img`
    position: absolute;
    top: 2.8px;
    right: 70.63px;
`;

export default function DiscoverBook(props) {
    const { book, isMainDiscover } = props;

    return (
        <DiscoverContainer bgColor={book.bgColor} isMainDiscover={isMainDiscover}>
            <ContentContainer>
                <ContentSection>
                    <BookInfos>
                        <BookTitle>{book.title}</BookTitle>
                        <BookAuthor>{book.author}</BookAuthor>
                    </BookInfos>
                    <ReadingNow>
                        <ChartIcon />
                        <ReadingNowText><strong>{book.reads}+</strong> Read Now</ReadingNowText>
                    </ReadingNow>
                </ContentSection>
                {
                    isMainDiscover && <ContentSection>
                        <BookImage src={book.image} alt={book.title} />
                    </ContentSection>
                }
            </ContentContainer>

            {
                isMainDiscover && <>
                    <OpacBorderCircle />
                    <Rectangle />
                    <Triangle src={TriangleImage} />
                </>
            }
        </DiscoverContainer>
    );
}