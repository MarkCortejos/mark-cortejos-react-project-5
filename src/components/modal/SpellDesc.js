import React, { Component } from 'react';

// props.selectedSpellToDisplay UPWARDS
// takes in a click on the Close Button and sends up an empty string for selectedSpell

// props.selectedSpellToDisplay DOWNWARDS
// takes in the selectedSpell from SpellList.js and uses it to open a window and display the selectedSpell's information

// const SpellDesc = (props) => {
//   return (
//     <div className="selectedSpellDisplay">
//       <h3 className="descLine">
//         <span>Spell: {this.props.selectedSpellToDisplay.name} ({this.props.selectedSpellToDisplay.school})</span>
//         <span>Level: {this.props.selectedSpellToDisplay.level}</span>
//       </h3>
//       <p className="descLine">
//         <span><u>Casting Time</u>: {this.props.selectedSpellToDisplay.casting_time}</span>
//         <span><u>Duration</u>: {this.props.selectedSpellToDisplay.duration}</span>
//         <span><u>Concentration</u>: {this.props.selectedSpellToDisplay.concentration}</span>
//       </p>
//       <p className="descLine">
//         <span><u>Range</u>: {this.props.selectedSpellToDisplay.range}</span>
//         <span><u>Components</u>: {this.props.selectedSpellToDisplay.components}</span>
//         <span><u>Ritual</u>: {this.props.selectedSpellToDisplay.ritual}</span>
//       </p>

//       <p><u>Materials</u>: {this.props.selectedSpellToDisplay.material}</p>
//       <p><u>Description</u>: {this.props.selectedSpellToDisplay.desc}</p>
//       <p><u>Higher Level Casting</u>: {this.props.selectedSpellToDisplay.higher_level}</p>


//       <p className="descLine">
//         <span><u>Classes</u>: {this.props.selectedSpellToDisplay.dnd_class}</span>
//         <span><u>Page</u>: {this.props.selectedSpellToDisplay.page}</span>
//       </p>
//     </div>
//   )
// }

class SpellDesc extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div className="modal"
          style={{
            transform: this.props.show ? 'translateY(0vh)':'translateY(-100vh)',
            opacity: this.props.show ? '1' : '0'
          }}
          >
        <div className="spellDisplay">
          <div className="wrapper">
            <div className="closeButton clearfix">
              <p 
                onClick={() => {this.props.close()}}
              >
                X
              </p>
            </div>
            <h3 className="descLine flex-container">
              <span>Spell: {this.props.selectedSpellToDisplay.name} ({this.props.selectedSpellToDisplay.school})</span>
              <span>Level: {this.props.selectedSpellToDisplay.level}</span>
            </h3>
            <p className="descLine flex-container">
              <span><u>Casting Time</u>: {this.props.selectedSpellToDisplay.casting_time}</span>
              <span><u>Duration</u>: {this.props.selectedSpellToDisplay.duration}</span>
              <span><u>Concentration</u>: {this.props.selectedSpellToDisplay.concentration}</span>
            </p>
            <p className="descLine flex-container">
              <span><u>Range</u>: {this.props.selectedSpellToDisplay.range}</span>
              <span><u>Components</u>: {this.props.selectedSpellToDisplay.components}</span>
              <span><u>Ritual</u>: {this.props.selectedSpellToDisplay.ritual}</span>
            </p>

            <p><u>Materials</u>: {this.props.selectedSpellToDisplay.material}</p>
            <p><u>Description</u>: {this.props.selectedSpellToDisplay.desc}</p>
            <p><u>Higher Level Casting</u>: {this.props.selectedSpellToDisplay.higher_level}</p>


            <p className="descLine flex-container">
              <span><u>Classes</u>: {this.props.selectedSpellToDisplay.dnd_class}</span>
              <span><u>Page</u>: {this.props.selectedSpellToDisplay.page}</span>
            </p>
          </div>
        </div>
      </div>
    )
  }
}



export default SpellDesc;