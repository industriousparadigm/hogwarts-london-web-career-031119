import React from 'react'

const PigDetails = (props) => {
  const weight = "weight as a ratio of hog to LG - 24.7 Cu. Ft. French Door Refrigerator with Thru-the-Door Ice and Water"
  const { pig, handlePigSelection } = props

  return <div className="ui centered card" onClick={() => handlePigSelection(null)} >
    <div className="image">
      <img src={require('../hog-imgs/' + pig.name.toLowerCase().split(' ').join('_') + '.jpg')} alt={pig.name}/>
    </div>
    <div className="content">
      <h2 className="header">{pig.name}</h2>
      <div className="meta">
        <span className="date">{pig.specialty}</span>
        <p className="date">{ "Highest honors: " + pig['highest medal achieved']}</p>
      </div>
      <div className="description">
        {weight + ": " + pig[weight]}
            </div>
    </div>
    { pig.greased && <div className="extra content"><span>Greased</span></div> }
  </div>
}

export default PigDetails