import React, {Component} from 'react'
import PropTypes from 'prop-types'
import SelectedHero from './SelectedHero'
import {UList, Title} from './styled'

class UnrankedList extends Component {
	constructor(props) {
		super(props)

		this.state = {
			active: null,
		}
	}
	render() {
		const {unrankedList} = this.props
		if (this.state.active) {
			return (
			<div>
				<SelectedHero heroName={this.state.active}/>
				<UList>
					{unrankedList.map((item, i) => <li key={i} onMouseDown={() => { this.props.handleClick(item) }}>{item}</li>)}
				</UList>
			</div>
		)
		} else {
			return (
			<div>
				<UList>
					{unrankedList.map((item, i) => <li key={i} onMouseDown={() => { this.props.handleClick(item) }}>{item}</li>)}
				</UList>
			</div>
		)
		}

	}
}

UnrankedList.propTypes = {
	unrankedList: PropTypes.array.isRequired,
	handleClick: PropTypes.func.isRequired
}

export default UnrankedList
