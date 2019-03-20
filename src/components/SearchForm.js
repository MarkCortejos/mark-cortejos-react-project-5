import React, { Component } from 'react';

class SearchForm extends Component {
  constructor(props) {
    super(props)
    this.state = {
      searchQuery: ""
    }
  }

  onSubmitSearch = (e) => {
    e.preventDefault();
    // const submittedQuery = this.state.searchQuery.toLowerCase()
    // this.props.searchForSpell(submittedQuery)
  }

  handleSearchChange = (e) => {
    this.setState({
      searchQuery: e.target.value
    })
    this.props.searchForSpell(this.state.searchQuery)
  }

  render() {
    return(
      <div className="searchForm">
        <form action="submit" onSubmit={this.onSubmitSearch}>
          <label htmlFor="search" className="visuallyhidden">Search for spell</label>
          <input id="search" type="text" placeholder="Search for spell" 
            onChange={(e)=> {this.handleSearchChange(e)}} 
            value={this.state.searchQuery}/>
          {/* <button type="submit">Search</button> */}
        </form>
      </div>
    )
  }
}

export default SearchForm;