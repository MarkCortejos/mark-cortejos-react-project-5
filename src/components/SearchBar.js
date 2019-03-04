import React, { Component } from 'react';
import SearchForm from './SearchForm.js';
import Filters from './Filters.js';


class SearchBar extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div className="searchBar flex-container wrapper">
        <Filters filterSpells={this.props.filterSpells} />
        <SearchForm searchForSpell={this.props.searchForSpell}/>
      </div>
    )
  }
}




export default SearchBar;