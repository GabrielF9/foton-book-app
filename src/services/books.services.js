import axios from 'axios';

const BASE_URL = 'https://www.googleapis.com/books/v1/volumes';

export const getAllBooks = (searchText, offset = 0, maxResults = 10) => {
    return new Promise((resolve, reject) => {
        axios.get(BASE_URL, {
            params: {
                q: `intitle:${searchText}`,
                startIndex: offset * maxResults,
                maxResults,
                fields: 'items(selfLink,volumeInfo(title,authors,imageLinks(thumbnail)))'
            }
        }).then((res) => {
            resolve(res.data);
        }).catch((error) => {
            reject(error);
        });
    });
}

export const getBook = (bookLink) => {
    return new Promise((resolve, reject) => {
        axios.get(bookLink).then((res) => {
            resolve(res.data);
        }).catch((error) => {
            reject(error);
        });
    });
}