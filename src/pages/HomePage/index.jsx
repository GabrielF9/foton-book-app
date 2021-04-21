import {
    ContentContainer,
    HomeContainer,
    ReviewImage
} from './styles';

import ContentSection from "../../components/ContentSection";
import NavigationBar from "../../components/NavigationBar";
import Saudation from "../../components/Saudation";
import SearchBar from "../../components/SearchBar";
import ReviewImg from '../../assets/review_img.png';
import CurrentBookImg from '../../assets/current_book_img.png';
import CurrentlyReading from '../../components/CurrentlyReading';

export default function HomePage() {
    return (
        <HomeContainer>
            <ContentContainer>
                <SearchBar />
                <Saudation name='Mehmed Al Fatih' />

                <ContentSection title='Discover new book' action='More' />

                <ContentSection title='Currently Reading' action='All' />
                <CurrentlyReading
                    image={CurrentBookImg}
                    title='Originals'
                    autor='by Adam Grant'
                    actualChapter={2}
                    totalChapters={9}
                />

                <ContentSection title='Reviews of the Days' action='All Video' />
                <ReviewImage src={ReviewImg} alt='review_img' />
            </ContentContainer>
            <NavigationBar />
        </HomeContainer>
    );
}
