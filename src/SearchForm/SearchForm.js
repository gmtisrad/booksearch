import React, { Component } from 'react';
import './SearchForm.css';

class SearchForm extends Component {
    render() {
        return (
            <form className='searchform'>
                <label htmlFor='booksearch'>Search: </label>
                <input id='booksearch' name='booksearch' type='text' placeholder='Search a book...'/>
                <button type='submit'>Search</button>
            </form>
        )
    }
}

export default SearchForm;