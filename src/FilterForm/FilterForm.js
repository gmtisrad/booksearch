import React, { Component } from 'react';
import './FilterForm.css';

class FilterForm extends Component {
    render() {
        return(
            <form className='filterform'>
                <label htmlFor='printtype'>Print Type: </label>
                <select onChange={event => this.props.onPrintChange(event.target.value)}required id='printtype' name='printtype'>
                    <option value=''>Select one...</option>
                    <option value='all'>All</option>
                    <option value='books'>Books</option>
                    <option value='magazines'>Magazines</option>
                </select>
                <label htmlFor='booktype'>Book Type: </label>
                <select onChange={event => this.props.onBookChange(event.target.value)}required id='booktype' name='booktype'>
                    <option value='null'>No Filter</option>
                    <option value='partial'>Partial Preview Available</option>
                    <option value='full'>Full Text Available</option>
                    <option value='free-ebooks'>Full Free Ebooks</option>
                    <option value='paid-ebooks'>Full Paid Ebooks</option>
                    <option value='ebooks'>All Ebooks</option>
                </select>
            </form>
        )
    }
}

export default FilterForm;