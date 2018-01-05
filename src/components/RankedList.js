import React from 'react'
import PropTypes from 'prop-types'

class RankedList extends React.Component {
	render() {
		const {rankedList} = this.props
		return (
			<div>
				<ul id="ranked-list">
					{rankedList.map((item, i) => <li key={i}>{item}</li>)}
				</ul>
			</div>
		)
	}
}

RankedList.propTypes = {
	rankedList: PropTypes.array.isRequired
}

export default RankedList
