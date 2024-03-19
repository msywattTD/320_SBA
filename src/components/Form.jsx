import { useState } from 'react';

export default function Form({ sortValue, setSortValue }) {
    function handleSubmit(e) {
        e.preventDefault();
        setSortValue(e.target[0].value);
        console.log('The sort value is :', sortValue);
    }

    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="sort">Sort By:</label>
            <select name="sort" id="sort">
                <option value="0">0</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
                <option value="6">6</option>
                <option value="7">7</option>
                <option value="8">8</option>
                <option value="9">9</option>
            </select>
            <button type="submit">Sort</button>
        </form>
    );
}
