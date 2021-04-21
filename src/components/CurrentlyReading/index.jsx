import styled from 'styled-components';
import { ReactComponent as ChapterIcon } from '../../assets/chapter.svg';

const ReadingContainer = styled.div`
    position: relative;
    width: calc(100% - 44px);
    height: 100px;
    margin-top: 30px;
    background-color:#EEF5DB;
    box-shadow: 0px 3px 45px rgba(121, 141, 67, 0.115084);
    border-radius: 0px 3px 3px 0px;
    align-self: flex-start;
`;

export const BookCoverImage = styled.img`
    position: absolute;
    top: -18px;
    left: 20px;
`;

const ReadingInfoContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-start;

    height: 100%;

    margin-left: calc(20px + 88px + 8px);
    padding: 10px 0px;
`;

const ReadingInfoBookContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
`;

const ReadingTitle = styled.span`
    font-size: 20px;
    line-height: 27px;
    letter-spacing: 2px;
    font-weight: bold;
    font-family: 'Playfair Display', serif;
    color: #2A2B26;
`;

const ReadingAutor = styled.span`
    margin-top: 5px;
    font-family: 'Roboto', sans-serif;
    font-size: 10px;
    line-height: 12px;
    color: #74776D;
`;

const ReadingChapterInfo = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
`;

const ChapterInfo = styled.span`
    margin-left: 5px;
    font-size: 10px;
    line-height: 12px;
    letter-spacing: 0.020635px;
    color: #2A2B26;
`;

const ChapterActualInfo = styled.span`
    font-weight: bold;
    font-size: 10px;
    line-height: 12px;
    letter-spacing: 0.020635px;
    color: #FF6978;
`;

export default function CurrentlyReading(props) {
    return (
        <ReadingContainer>
            <BookCoverImage src={props.image} alt={props.title} />
            <ReadingInfoContainer>
                <ReadingInfoBookContainer>
                    <ReadingTitle>{props.title}</ReadingTitle>
                    <ReadingAutor>{props.autor}</ReadingAutor>
                </ReadingInfoBookContainer>
                <ReadingChapterInfo>
                    <ChapterIcon />
                    <ChapterInfo>Chapter <ChapterActualInfo>{props.actualChapter}</ChapterActualInfo> from {props.totalChapters}</ChapterInfo>
                </ReadingChapterInfo>
            </ReadingInfoContainer>
        </ReadingContainer>
    );
}