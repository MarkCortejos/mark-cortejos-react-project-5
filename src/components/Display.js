import React, { Component } from 'react';
import SpellDesc from './modal/SpellDesc.js'

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
  
  renderLoading() {
    return (
      <div>
        <p>Searching for spells... </p>
      </div>
    )
  }
  
  renderSpellList() {
    if (this.props.spellsToDisplay.length > 0) {
      return(
        this.props.spellsToDisplay.map((spell, i) => {
          return (
            <p className='listedSpell flex-container' key={i} onClick={e => { this.showSpellDesc(e, spell) }}>
              <span>{spell.name}</span>
              <span>{spell.school}</span>
              <span>{spell.page}</span>
            </p>
          )
        })
      )
    } else {
      return (
        <p>Hmm, no spells match your search parameters...</p>
      )
    }
  }


  render() {
    return (
      <div className="display wrapper">
        <SpellDesc
            show={this.state.isShowing} 
            selectedSpellToDisplay={this.state.selectedSpell}
            close={this.closeSpellDesc}
            />
        <div>
          <p className="listTitle flex-container">
            <span>Spell Name</span>
            <span>Spell School</span>
            <span>Page #</span>
          </p>
        </div>
        <div className = "spellList">
          {
            this.props.isLoading ? 
              this.renderLoading() : 
              this.renderSpellList()
            }
        </div>
        <div className="paperBottom">
            {/* <a href="#top">^to Top^</a> */}
        </div>
      </div>
    )
  }
}


export default Display;