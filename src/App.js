import React, { Component } from 'react';
import axios from 'axios';
import './App.css';
import Header from './components/Header.js';
// import SearchBar from './components/SearchBar.js';
import Display from './components/Display.js';
import Footer from './components/Footer.js';


class App extends Component {
  constructor() {
    super()
    this.state = {
      spellCount: 0,
      allSpells: [],
      displayedSpells: [],
      searchedSpell: '',
      activeFilters: {}
    }
  }
  
  // mounted component calls the D&D API and stores all of the spells in allSpells
  componentDidMount() {

    axios({
      method: 'get',
      responseType: 'json',
      url: 'https://api-beta.open5e.com/spells/'
    }).then(response => {
      // store variables in state
      this.setState({
        spellCount: response.data.count,
        allSpells: response.data.results,
        displayedSpells: response.data.results
      }) 
    })
  }

  render() {
    return (
      <div className="App">
        <Header />
        {/* <SearchBar  /> */}
        <Display spellsToDisplay = {this.state.displayedSpells} />
        <Footer />
      </div>
    );
  }
}

export default App;