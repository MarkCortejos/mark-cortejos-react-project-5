import React, { Component } from 'react';
import SearchForm from './SearchForm.js';
import Filters from './Filters.js';

// PROPS UPWARDS
// takes in the arrays of filtered selectrions from Filters.js and sends them up
// takes in the query string from SearchForm.js and sends it up

class SearchBar extends Component {
  constructor(props) {
    super()
  }

  render() {
    return (
      <div className="searchBar flex-container">
        <Filters />
        <SearchForm />
      </div>
    )
  }
}




export default SearchBar;