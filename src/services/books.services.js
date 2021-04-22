import axios from 'axios';

const BASE_URL = 'https://www.googleapis.com/books/v1/volumes';

export const getAllBooks = (searchText, offset = 0, maxResults = 10) => {
    return new Promise((resolve, reject) => {
        axios.get(BASE_URL, {
            params: {
                q: `intitle:${searchText}`,
                startIndex: offset * maxResults,
                maxResults,
                fields: 'items(id,volumeInfo(title,authors,imageLinks(thumbnail)))'
            }
        }).then((res) => {
            resolve(res.data);
        }).catch((error) => {
            reject(error);
        });
    });
}

export const getBook = (bookId) => {
    return new Promise((resolve, reject) => {
        axios.get(`${BASE_URL}/${bookId}`).then((res) => {
            resolve(res.data);
        }).catch((error) => {
            reject(error);
        });
    });
}