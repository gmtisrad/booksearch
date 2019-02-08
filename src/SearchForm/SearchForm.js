import React, { Component } from 'react';
import './SearchForm.css';

class SearchForm extends Component {
    render() {
        return (
            <form onSubmit={event => {
                event.preventDefault();
                this.props.onSubmit();
                }} 
                className='searchform'>
                <label htmlFor='booksearch'>Search: </label>
                <input 
                    id='booksearch' 
                    name='booksearch' 
                    type='text' 
                    placeholder='Search a book...'
                    onChange={(event) => this.props.onChange(event.target.value)}/>
                <button type='submit'>Search</button>
            </form>
        )
    }
}

export default SearchForm;