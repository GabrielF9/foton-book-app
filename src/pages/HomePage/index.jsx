import React, { useState } from 'react';
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
import HookedBookCover from '../../assets/hooked_book.png';
import CurrentlyReading from '../../components/CurrentlyReading';
import DiscoverBooks from '../../components/DiscoverBooks';
import SearchPage from '../SearchPage';

export default function HomePage() {
    const [searchText, setSearchText] = useState('');
    const [finalSearchText, setFinalSearchText] = useState('');

    const discoverBooksData = [
        {
            title: 'Hooked',
            author: 'Nir Eyal',
            reads: 120,
            bgColor: '#00173D',
            image: HookedBookCover
        },
        {
            title: 'The One Thing',
            author: 'Garry Keller',
            reads: 90,
            bgColor: '#451475',
            image: HookedBookCover
        }
    ];

    const handleSearchText = (event, clear) => {
        if (clear) {
            setSearchText('');
            setFinalSearchText('');
            return;
        }

        console.log(event.target.value);
        setSearchText(event.target.value);

        if (event.target.value === '') {
            setFinalSearchText('');
        }
    }

    const handleEnter = () => {
        console.log('entrou enter');
        setFinalSearchText(searchText);
    }

    return (
        <HomeContainer>
            <ContentContainer>
                <SearchBar searchText={searchText} onChange={handleSearchText} handleEnter={handleEnter} />

                {
                    !searchText ? <>
                        <Saudation name='Mehmed Al Fatih' />

                        <ContentSection title='Discover new book' action='More' />
                        <DiscoverBooks data={discoverBooksData} />

                        <ContentSection title='Currently Reading' action='All' />
                        <CurrentlyReading
                            image={CurrentBookImg}
                            title='Originals'
                            author='by Adam Grant'
                            actualChapter={2}
                            totalChapters={9}
                        />

                        <ContentSection title='Reviews of the Days' action='All Video' />
                        <ReviewImage src={ReviewImg} alt='review_img' />
                    </>
                        : <SearchPage searchText={finalSearchText} />
                }
            </ContentContainer>

            <NavigationBar />
        </HomeContainer>
    );
}
