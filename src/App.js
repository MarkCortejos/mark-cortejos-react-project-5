import React, { Component } from 'react';
import axios from 'axios';
import './App.css';
import Header from './components/Header.js';
import SearchBar from './components/SearchBar.js';
import Display from './components/Display.js';
import Footer from './components/Footer.js';


class App extends Component {
  constructor() {
    super()
    this.state = {
      isLoading: true,
      allSpells: [],
      displayedSpells: []
    }
  }
  
  // when component mounts, activate axiosCall
  componentDidMount() {
    this.axiosCall();
    
  } // componentDidMount ends

  // axiosCall function
  async axiosCall() {
    try {
      axios({
        method: 'get',
        responseType: 'json',
        url: 'https://api-beta.open5e.com/spells/'
      }).then(response => {
        
        this.setState({
          allSpells:response.data.results,
          displayedSpells: this.state.allSpells,
          isLoading: false
        })
        // this.allSpells = response.data.results

        // console.log('check data', response.data)
        this.acquireSpells(response.data)
        
      })
    }

    catch {
      console.log('there was an error')
    }
  } // axiosCall Ends


  // recursive function for acquiring spells
  acquireSpells = (data) => {
    if (this.state.allSpells.length >= data.count === true) {
      this.setState({
        displayedSpells: this.state.allSpells
      }) 
    } else {
      // console.log('fetch url',data.next)
      fetch(data.next
      ).then(response => response.json())
      .then(data => {
        // console.log('data after response', data)

        this.setState({
          allSpells: this.state.allSpells.concat(data.results),
          displayedSpells: this.state.allSpells
        })
        this.acquireSpells(data)
      })
    }
  }

  // need to compare string values in two arrays
    // returns true if the arrays share the same string
  compareArray = (filtersArray, classesArray) => {
    let classMatch = 0
    classesArray.forEach( e => {
      if (filtersArray.includes(e) === true) {
        classMatch++
      }
    })

    if (classMatch > 0) {
      return true
    } else {
      return false
    }
  } // compareArray Ends

  // when passed an array of values to filter by,
    // iterates through allSpells to return spells that match the filter values
    // use setState to change the value of displayedSpells to the filtered array of spells
  filterSpells = (activeFilters) => {
    const filteredSpells = []
    
    this.state.allSpells.map( e => {
      const spellClass = e.dnd_class.split(", ")
      const spellLevel = e.level

      if (
          activeFilters.includes(spellLevel) === true && 
          this.compareArray(activeFilters, spellClass) === true) {
            filteredSpells.push(e)
          }
    })

    this.setState({
      displayedSpells: filteredSpells
    })
  } // filterSpells Ends

  // take in a query from SearchForm
    // iterate through allSpells to find spells that match the query
    // display the results
  searchForSpell = (query) => {
    const searchResults = []
    query = query.toLowerCase()

    this.state.allSpells.forEach(e => {
      if (e.name.toLowerCase().includes(query) === true) {
        return searchResults.push(e)
      }
    })

    this.setState({
      displayedSpells: searchResults
    })
  } // searchForSpell Ends

  render() {
    return (
      <div className="App">
        <Header />
          <SearchBar filterSpells={this.filterSpells} searchForSpell={this.searchForSpell}/>
          <Display isLoading = {this.state.isLoading} spellsToDisplay = {this.state.displayedSpells} />
          <div className="wrapper paperBottom"></div>
          <Footer />
      </div>
    );
  }
}

export default App;