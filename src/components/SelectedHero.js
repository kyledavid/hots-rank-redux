import React from 'react'
import PropTypes from 'prop-types'
import {SelHero} from './styled'

const selectedHero = ({heroName, xCoord, yCoord}) => {
  const compStyle = {
    top: yCoord,
    left: xCoord,
    position: 'absolute',
  }
  return (
    <SelHero style={compStyle}><li>{heroName}</li></SelHero>
  )
}

selectedHero.propTypes = {
  heroName: PropTypes.string.isRequired,
  xCoord: PropTypes.number.isRequired,
  yCoord: PropTypes.number.isRequired
}

export default selectedHero
