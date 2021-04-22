import React, { useEffect, useState } from 'react';
import { useParams } from "react-router-dom";
import { getBook } from '../../services/books.services';
import Loading from '../../components/Loading';
import styled from 'styled-components';
import history from '../../helpers/history';
import { ReactComponent as BackIcon } from '../../assets/back.svg';
import { ReactComponent as BookOpenIcon } from '../../assets/book-open.svg';
import { ReactComponent as HeadphonesIcon } from '../../assets/headphones.svg';
import { ReactComponent as ShareIcon } from '../../assets/share.svg';
import SmallPatternCircleImg from '../../assets/small_pattern_circle.png';
import DiagonalPatternCircleImg from '../../assets/diagonal_pattern_circle.png';
import { Markup } from 'interweave';

const CenterLoading = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100vh;
    width: 100%;
`;

const BookDetailsContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    width: 100%;
`;

const BookHeader = styled.div`
    position: fixed;
    width: 100%;
    height: 282px;
    border-bottom-right-radius: 100px;
    background-color: #FFF6E5;
    padding: 55px 33px;
`;

const BookCoverImg = styled.img`
    position: absolute;
    top: 84px;
    left: calc(50% - 75.5px);
    width: 151px;
    height: 234px;
    border-radius: 5px;
    z-index: 2;
`;

const BookInfosContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    width: 100%;
    margin: 376px 0px calc(59px + 66px) 0px;
    padding: 0px 20px;
`;

const BookTitle = styled.p`
    font-size: 24px;
    line-height: 29px;
    letter-spacing: 1.5px;
    color: #36383A;
`;

const BookAuthor = styled.p`
    font-size: 16px;
    line-height: 19px;
    letter-spacing: 0.670588px;
    color: #FF6978;
    margin-top: 7px;
`;

const BookDescription = styled.div`
    font-size: 14px;
    line-height: 25px;
    letter-spacing: 0.2px;
    color: rgba(49, 49, 49, 0.6);
    margin-top: 10px;
`;

const BookActions = styled.div`
    position: fixed;
    bottom: 53px;
    width: 335px;
    height: 56px;
    background-color: #FFFFFF;
    box-shadow: 3px 3px 23px rgba(107, 103, 70, 0.125901);
    border-radius: 2px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 20px;
`;

const BookActionItem = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
`;

const BookActionItemText = styled.span`
    font-weight: bold;
    font-size: 14px;
    line-height: 17px;
    letter-spacing: 1px;
    color: #3F4043;
    margin-left: 10px;
`;

const Divider = styled.div`
    width: 1px;
    height: 100%;
    background-color: #979797;
`;

const OpacBorderCircle = styled.div`
    position: absolute;
    top: 86px;
    right: 112px;
    width: 24px;
    height: 24px;
    border-radius: 50%;
    border: 2px solid #4550A7;
`;

const OpacBigCircle = styled.div`
    position: absolute;
    top: 115px;
    left: 74px;
    width: 63px;
    height: 63px;
    border-radius: 50%;
    background-color: #00173D;
`;

const OpacSmallCircle = styled.div`
    position: absolute;
    top: 125px;
    left: 47px;
    width: 15px;
    height: 15px;
    border-radius: 50%;
    background-color: #FF6978;
`;

const SmallPatternCircle = styled.img`
    position: absolute;
    bottom: 0px;
    right: 95.11px;
`;

const DiagonalPatternCircle = styled.img`
    position: absolute;
    top: 0px;
    right: 0px;
`;

export default function BookDetailsPage() {
    const { bookId } = useParams();

    const [loading, setLoading] = useState(false);
    const [bookInfo, setBookInfo] = useState(null);

    const backPage = () => {
        history.goBack();
    }

    useEffect(() => {
        setLoading(true);

        getBook(bookId)
            .then((res) => {
                console.log(res);
                setBookInfo(res.volumeInfo);
                setTimeout(() => {
                    setLoading(false);
                }, 200);
            }).catch((error) => {
                console.log(error);
                setTimeout(() => {
                    setLoading(false);
                }, 200);
            });
    }, [bookId]);

    return (
        <>
            {
                loading
                    ? <CenterLoading>
                        <Loading />
                    </CenterLoading>
                    : bookInfo
                        ? <BookDetailsContainer>
                            <BookHeader>
                                <BackIcon onClick={backPage} />
                                <BookCoverImg src={bookInfo.imageLinks.thumbnail} alt={bookId.title} />
                                <OpacBorderCircle />
                                <OpacBigCircle />
                                <OpacSmallCircle />
                                <SmallPatternCircle src={SmallPatternCircleImg} />
                                <DiagonalPatternCircle src={DiagonalPatternCircleImg} />
                            </BookHeader>
                            <BookInfosContainer>
                                <BookTitle>
                                    <strong>{bookInfo.title}</strong> {bookInfo.subtitle ? `: ${bookInfo.subtitle}` : ''}
                                </BookTitle>
                                <BookAuthor>
                                    {bookInfo.authors ? bookInfo.authors[0] : ''}
                                </BookAuthor>
                                <BookDescription>
                                    <Markup content={bookInfo.description} />
                                </BookDescription>
                            </BookInfosContainer>

                            <BookActions>
                                <BookActionItem>
                                    <BookOpenIcon />
                                    <BookActionItemText>Read</BookActionItemText>
                                </BookActionItem>
                                <Divider />
                                <BookActionItem>
                                    <HeadphonesIcon />
                                    <BookActionItemText>Listen</BookActionItemText>
                                </BookActionItem>
                                <Divider />
                                <BookActionItem>
                                    <ShareIcon />
                                    <BookActionItemText>Share</BookActionItemText>
                                </BookActionItem>
                            </BookActions>
                        </BookDetailsContainer>
                        : <></>
            }
        </>
    );
}
