import React, { Component } from 'react';
import './BooksearchApp.css';
import SearchForm from '../SearchForm/SearchForm';
import FilterForm from '../FilterForm/FilterForm';
import BookList from '../BookList/BookList';

class BooksearchApp extends Component {
    constructor(props) {
        super(props);
        this.state = {
            query: '',
            books: null,
            bookType: null,
            printType: null,
        }
    }

    onBookChange = (bookType) => {
        this.setState({
            bookType
        })
    }

    onPrintChange = (printType) => {
        this.setState({
            printType
        })
    }

    onSearchChange = (query) => {
        this.setState({
            query
        });
    }

    getSearchResults = () => {
        const apiKey = 'AIzaSyBNfiKYSHSM7g9fsuj8TDMWiSfcnHwVVt0'
        const url = `https://www.googleapis.com/books/v1/volumes?q=${this.state.query}&key=${apiKey}${this.state.bookType !== null ? `&filter=${this.state.bookType}` : ''}${this.state.printType !== null ? `&printType=${this.state.printType}` : ''}`;

        console.log(url);
        
        fetch(url)
            .then(response => {
                if(!response.ok){
                    throw new Error('Something went wrong. Try again later.')
                }
                return (response.json());
            })
            .then(responseJson => {
                this.setState({
                    books: responseJson.items,
                })
            })
            .catch(err => {
                this.setState({
                    error: err.message,
                })
            })
    }

    render() {
        return(
            <div className='booksearchapp'>
                <div className='booksearchapp__form'>
                    <SearchForm 
                        onChange={this.onSearchChange}
                        onSubmit={this.getSearchResults}/>
                    <FilterForm 
                        onPrintChange={this.onPrintChange} 
                        onBookChange={this.onBookChange} />
                </div>
                {this.state.books !== null ? <BookList books={this.state.books}/> : ''}
            </div>
        )
    }
}

export default BooksearchApp;