import React from 'react'

const Pig = props => {
  const { pig, handlePigSelection } = props

  return (
    <div className="ui card four wide column" onClick={() => handlePigSelection(pig)}>
      <div className="image">
        <img src={require('../hog-imgs/'+ pig.name.toLowerCase().split(' ').join('_') + '.jpg')} alt={pig.name} />
      </div>
      <div className="content">
        <h2 className="header">{pig.name}</h2>
      </div>
    </div> )
}

export default Pig