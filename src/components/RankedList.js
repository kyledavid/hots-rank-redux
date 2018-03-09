import React from 'react'
import PropTypes from 'prop-types'
import {RList} from './styled'

class RankedList extends React.Component {
	render() {
		const {rankedList} = this.props
		return (
			<div>
				<RList>
					{rankedList.map((item, i) => <li key={i}>{item}</li>)}
				</RList>
			</div>
		)
	}
}

RankedList.propTypes = {
	rankedList: PropTypes.array.isRequired
}

export default RankedList
