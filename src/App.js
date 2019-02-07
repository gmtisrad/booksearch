import React, { Component } from 'react';
import BooksearchApp from './BooksearchApp/BooksearchApp.js';
import './App.css';

class App extends Component{
  render () {
    return (
      <div className='app'>
        <h1>Google Book Search</h1>
        <BooksearchApp />
      </div>
    )
  }
}

export default App;