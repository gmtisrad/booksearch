import React, { Component } from 'react';
import './Book.css';

class Book extends Component {
    render () {
        return (
            <div className='book'>
                <h2>{this.props.title}</h2>
                <div className='book__thumbnail'>
                    <img src={this.props.src} alt={this.props.title}/>
                </div>
                <div className='book__details'>
                    <p>Author: {this.props.author}</p>
                    <p>Price: {this.props.price}</p>
                    <p>{this.props.description}</p>
                </div>
            </div>
        )
    }
}

export default Book;