import React from 'react'
import PropTypes from 'prop-types'
import {RList} from './styled'

class RankedList extends React.Component {
	makeList() {
		const {rankedList} = this.props
		let list = []

		for(let i = 0; i <= 5; i++) {
			list[i] = rankedList[i] ? rankedList[i] : null
		}

		return list.map((item, i) => <li key={i}>{item}</li>)
	}
	render() {

		return (
			<div>
				<RList>
					{this.makeList()}
				</RList>
			</div>
		)
	}
}

RankedList.propTypes = {
	rankedList: PropTypes.array.isRequired
}

export default RankedList
