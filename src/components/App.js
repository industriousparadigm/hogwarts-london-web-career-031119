import React, { Component } from 'react';
import '../App.css';
import hogs from '../porkers_data';

import PigDetails from './PigDetails'
import PigsContainer from './PigsContainer'
import Nav from './Nav'


class App extends Component {
  state = {
    selectedPig: null,
    pigs: hogs,
    filters: {
      greaseFilter: false,
      sortBy: "default"
    }
  }

  handleFilterChange = (object) => {
    this.setState({ filters: {...this.state.filters, ...object}})
  }

  handlePigSelection = (pig) => {
    this.setState({ selectedPig: pig })
  }

  render() {
    const { selectedPig, pigs } = this.state
    return (
      <div className="App">
          <Nav />
          {
            selectedPig
              ? <PigDetails pig={selectedPig} handlePigSelection={this.handlePigSelection} />
              : <PigsContainer filters={this.state.filters} pigs={pigs} handlePigSelection={this.handlePigSelection} handleFilterChange={this.handleFilterChange} />
          }

      </div>
    )
  }
}

export default App;