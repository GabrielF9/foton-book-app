import React, { useEffect } from 'react';

export default function SearchPage(props) {
    const { searchText } = props;

    useEffect(() => {
        if (searchText) {
            console.log('chama api');
        }
    }, [searchText]);

    return (
        <>
            <p>Press Enter to Search</p>
            {
                searchText && <p>{searchText}</p>
            }
        </>
    );
}
