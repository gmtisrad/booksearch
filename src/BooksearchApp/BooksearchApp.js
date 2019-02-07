import React, { Component } from 'react';
import './BooksearchApp.css';
import SearchForm from '../SearchForm/SearchForm';
import FilterForm from '../FilterForm/FilterForm';
import BookList from '../BookList/BookList';

class BooksearchApp extends Component {
    constructor(props) {
        super(props);
        this.state({
            books: null  
        })
    }

    getSearchResults(query) {
        const url = 'https://www.googleapis.com/books/v1/volumes';
        const apiKey = 'AIzaSyBNfiKYSHSM7g9fsuj8TDMWiSfcnHwVVt0'
    }

    render() {
        return(
            <div className='booksearchapp'>
                <div className='booksearchapp__form'>
                    <SearchForm />
                    <FilterForm />
                </div>
                <BookList/>
            </div>
        )
    }
}

export default BooksearchApp;