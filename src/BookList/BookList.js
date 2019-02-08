import React, { Component } from 'react';
import Book from '../Book/Book.js';
import './BookList.css'

class BookList extends Component {
    render() {
        let books = this.props.books.map(book => {
            console.log(book);
            return book ? <Book 
                    key={book.id}
                    price={book.saleInfo.amount ? book.saleInfo.listPrice.amount : 'Price Unavailable'}
                    title={book.volumeInfo.title} 
                    author={book.volumeInfo.authors ? book.volumeInfo.authors[0] : 'No Authors Listed'} 
                    src={book.volumeInfo.imageLinks ? book.volumeInfo.imageLinks.thumbnail : 'https://images.pexels.com/photos/45201/kitty-cat-kitten-pet-45201.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'} 
                    description={book.volumeInfo.description} /> : ''
        })
        return (
            <div className='booklist'>
                {books}
            </div>
        )
    }
}

export default BookList;