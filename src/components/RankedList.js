import React from 'react'
import PropTypes from 'prop-types'
import {RList} from './styled'

class RankedList extends React.Component {
	makeList() {
		const {rankedList} = this.props
		let list = []
		console.log(rankedList)
		for(let i = 0; i <= 4; i++) {
			list[i] = rankedList[i] ? rankedList[i] : null
		}

		return list.map((item, i) => <li key={i} onMouseDown={this.handleClick.bind(this)}>{item}</li>)
	}

	handleClick(e) {
		const hero = e.target.innerText
		const yCoord = e.clientY
		const xCoord = e.clientX
		const {handleRankedClick} = this.props

		if(hero) {
			handleRankedClick(hero, xCoord, yCoord)
		}
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
	rankedList: PropTypes.array.isRequired,
	handleRankedClick: PropTypes.func.isRequired
}

export default RankedList
