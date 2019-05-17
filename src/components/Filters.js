import React from 'react'

const Filters = props => {
  const weight = "weight as a ratio of hog to LG - 24.7 Cu. Ft. French Door Refrigerator with Thru-the-Door Ice and Water"


  return <div>
    {
      props.filters.greaseFilter
        ? <button className="ui teal button" onClick={() => props.handleFilterChange({ greaseFilter: false })}>Show all</button>
        : <button className="ui teal button" onClick={() => props.handleFilterChange({ greaseFilter: true })}>Greased only</button>
    }
    <select value={props.filters.sortBy} className="ui teal" onChange={event => props.handleFilterChange({ sortBy: event.target.value })}>
      <option value="default">Default</option>
      <option value="name">Name</option>
      <option value={weight}>Weight</option>
    </select>

  </div>
}
 
export default Filters