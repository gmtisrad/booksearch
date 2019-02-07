import React, { Component } from 'react';
import './FilterForm.css';

class FilterForm extends Component {
    render() {
        return(
            <form className='filterform'>
                <label htmlFor='printtype'>Print Type: </label>
                <select id='printtype' name='printtype'>
                    <option value='None'>Select one...</option>
                </select>
                <label htmlFor='booktype'>Book Type: </label>
                <select id='booktype' name='booktype'>
                    <option value='None'>No Filter</option>
                </select>
            </form>
        )
    }
}

export default FilterForm;