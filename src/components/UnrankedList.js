import React, {Component} from 'react'
import PropTypes from 'prop-types'

class UnrankedList extends Component {
	render() {
		const {unrankedList} = this.props
		return (
			<ul id="unranked-list">
				{unrankedList.map((item, i) => <li key={i}>{item}</li>)}
			</ul>
		)
	}
}

UnrankedList.propTypes = {
	unrankedList: PropTypes.array.isRequired
}

export default UnrankedList
