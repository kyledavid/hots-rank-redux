import React from 'react'
import PropTypes from 'prop-types'

const selectedHero = ({heroName, xCoord, yCoord}) => {
  const compStyle = {
    top: yCoord,
    left: xCoord,
    position: 'absolute',
  }
  return (
    <ul id="selected-hero" style={compStyle}><li>{heroName}</li></ul>
  )
}

selectedHero.propTypes = {
  heroName: PropTypes.string.isRequired,
  xCoord: PropTypes.number.isRequired,
  yCoord: PropTypes.number.isRequired
}

export default selectedHero
