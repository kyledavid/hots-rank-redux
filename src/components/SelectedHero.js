import React from 'react'
import PropTypes from 'prop-types'

const selectedHero = ({heroName}) => <ul id="selected-hero"><li>{heroName}</li></ul>

selectedHero.propTypes = {
  heroName: PropTypes.string.isRequired
}

export default selectedHero
