import React, { Component } from 'react'
import Pig from './Pig'
import Filters from './Filters'

class PigsContainer extends Component {

  listPigs = () => {
    const { sortBy } = this.props.filters
    return this.props.pigs
      .filter(pig => this.props.filters.greaseFilter ? pig.greased : true)
      .sort((a, b) => {
        if(a[sortBy] < b[sortBy]) { return -1 }
        if(a[sortBy] > b[sortBy]) { return 1 }
        return 0
      })
      .map(pig => <Pig key={pig.name} pig={pig} handlePigSelection={this.props.handlePigSelection}/>)
  }

  render() {
    return (
      <div id="pigs-container">
        <Filters filters={this.props.filters} handleFilterChange={this.props.handleFilterChange} />
        <div className="pig-list ui grid container">
          {this.listPigs()}
        </div>
        
      </div>
    )
  }
}
 
export default PigsContainer