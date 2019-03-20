import React, { Component } from 'react';


class Filters extends Component {
  constructor(props) {
    super(props);
    this.activeFilters = ['Cantrip',
                          '1st-level',
                          '2nd-level',
                          '3rd-level',
                          '4th-level',
                          '5th-level',
                          '6th-level',
                          '7th-level',
                          '8th-level',
                          '9th-level',
                          'Bard',
                          'Cleric',
                          'Druid',
                          'Paladin',
                          'Ranger',
                          'Sorcerer',
                          'Warlock',
                          'Wizard'];
  }
  
  updateFilter = (e) => {
    const checkedValue = e.target.value

    if (e.target.checked === true) {
      this.activeFilters.push(checkedValue)
    } else {
      this.activeFilters = this.activeFilters.filter(filterValues => filterValues !== checkedValue)
    }

    this.props.filterSpells(this.activeFilters)
  }

  render() {
    return (
      <div className="filters flex-container">

        <ul tabindex='0' className="filterLevel">Select Level {`\u25BC`}
          <li>
            <ul tabindex='0' className="dropMenu">
              <li>
                <input id="Cantrip" value="Cantrip" type="checkbox"
                  defaultChecked="true"
                  onChange={e=>{this.updateFilter(e)}}
                />
                <label tabindex='0' htmlFor="Cantrip">Cantrip</label>
              </li>

              <li>
                <input id="1st-level" value="1st-level" type="checkbox"
                  defaultChecked="true"
                  onChange={e=>{this.updateFilter(e)}}
                />
                <label tabindex='0' htmlFor="1st-level">1st Level</label>
              </li>

              <li>
                <input id="2nd-level" value="2nd-level" type="checkbox"
                  defaultChecked="true"
                  onChange={e=>{this.updateFilter(e)}}
                />
                <label tabindex='0' htmlFor="2nd-level">2nd Level</label>
              </li>

              <li>
                <input id="3rd-level" value="3rd-level" type="checkbox"
                  defaultChecked="true"
                  onChange={e=>{this.updateFilter(e)}}
                />
                <label tabindex='0' htmlFor="3rd-level">3rd Level</label>
              </li>

              <li>
                <input id="4th-level" value="4th-level" type="checkbox"
                  defaultChecked="true"
                  onChange={e=>{this.updateFilter(e)}}
                />
                <label tabindex='0' htmlFor="4th-level">4th Level</label>
              </li>

              <li>
                <input id="5th-level" value="5th-level" type="checkbox"
                  defaultChecked="true"
                  onChange={e=>{this.updateFilter(e)}}
                />
                <label tabindex='0' htmlFor="5th-level">5th Level</label>
              </li>

              <li>
                <input id="6th-level" value="6th-level" type="checkbox"
                  defaultChecked="true"
                  onChange={e=>{this.updateFilter(e)}}
                />
                <label tabindex='0' htmlFor="6th-level">6th Level</label>
              </li>

              <li>
                <input id="7th-level" value="7th-level" type="checkbox"
                  defaultChecked="true"
                  onChange={e=>{this.updateFilter(e)}}
                />
                <label tabindex='0' htmlFor="7th-level">7th Level</label>
              </li>

              <li>
                <input id="8th-level" value="8th-level" type="checkbox"
                  defaultChecked="true"
                  onChange={e=>{this.updateFilter(e)}}
                />
                <label tabindex='0' htmlFor="8th-level">8th Level</label>
              </li>

              <li>
                <input id="9th-level" value="9th-level" type="checkbox"
                  defaultChecked="true"
                  onChange={e=>{this.updateFilter(e)}}
                />
                <label tabindex='0' htmlFor="9th-level">9th Level</label>
              </li>
            </ul>
          </li>
        </ul>

        <ul tabindex='0' className="filterClass">Select Class {`\u25BC`}
          <li>
            <ul tabindex='0' className="dropMenu">
              <li>
                <input id="Bard" value="Bard" type="checkbox"
                  defaultChecked="true"
                  onChange={e=>{this.updateFilter(e)}}
                />
                <label tabindex='0' htmlFor="Bard">Bard</label>
              </li>

              <li>
                <input id="Cleric" value="Cleric" type="checkbox"
                  defaultChecked="true"
                  onChange={e=>{this.updateFilter(e)}}
                />
                <label tabindex='0' htmlFor="Cleric">Cleric</label>
              </li>

              <li>
                <input id="Druid" value="Druid" type="checkbox"
                  defaultChecked="true"
                  onChange={e=>{this.updateFilter(e)}}
                />
                <label tabindex='0' htmlFor="Druid">Druid</label>
              </li>

              <li>
                <input id="Paladin" value="Paladin" type="checkbox"
                  defaultChecked="true"
                  onChange={e=>{this.updateFilter(e)}}
                />
                <label tabindex='0' htmlFor="Paladin">Paladin</label>
              </li>

              <li>
                <input id="Ranger" value="Ranger" type="checkbox"
                  defaultChecked="true"
                  onChange={e=>{this.updateFilter(e)}}
                />
                <label tabindex='0' htmlFor="Ranger">Ranger</label>
              </li>

              <li>
                <input id="Sorcerer" value="Sorcerer" type="checkbox"
                  defaultChecked="true"
                  onChange={e=>{this.updateFilter(e)}}
                />
                <label tabindex='0' htmlFor="Sorcerer">Sorcerer</label>
              </li>

              <li>
                <input id="Warlock" value="Warlock" type="checkbox"
                  defaultChecked="true"
                  onChange={e=>{this.updateFilter(e)}}
                />
                <label tabindex='0' htmlFor="Warlock">Warlock</label>
              </li>

              <li>
                <input id="Wizard" value="Wizard" type="checkbox"
                  defaultChecked="true"
                  onChange={e=>{this.updateFilter(e)}}
                />
                <label tabindex='0' htmlFor="Wizard">Wizard</label>
              </li>
            </ul>
          </li>
        </ul>
      </div>
    )
  }
}








export default Filters;