import React, { Component } from 'react';
import SpellDesc from './modal/SpellDesc.js'


// PROPS DOWNWARDS
// takes in the displayedSpells array from App.js and displays the information in the spell list
// takes in a click on an item in the displayed list of spells, sends down a string of that clicked item's id to SpellDesc.js

class Display extends Component {
  constructor(props) {
    super(props)
    this.state = {
      selectedSpell: {},
      isShowing: false
    }
  }

  showSpellDesc = (e, spell) => {
    this.setState({
      selectedSpell: spell,
      isShowing: true
    })
  }

  closeSpellDesc = () => {
    this.setState({
      selectedSpell: {},
      isShowing: false
    })
  }

  render() {
    return (
      <div className="Display wrapper">
        <SpellDesc
            show={this.state.isShowing} 
            selectedSpellToDisplay={this.state.selectedSpell}
            close={this.closeSpellDesc}
            />
        <div className = "spellList">       
          {
            this.props.spellsToDisplay.map((spell, i) => {
              return (
                <p className='listedSpell flex-container' key={i} onClick={e => {this.showSpellDesc(e, spell)}}>
                  <span>{spell.name}</span>
                  <span>{spell.school}</span>
                  <span>{spell.page}</span>
                </p>
              )
            })
          }
        </div>
      </div>
    )
  }
}


export default Display;