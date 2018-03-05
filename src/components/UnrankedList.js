import React, {Component} from 'react'
import PropTypes from 'prop-types'
import SelectedHero from './SelectedHero'

class UnrankedList extends Component {
	constructor(props) {
		super(props)

		this.state = {
			active: null,
		}

		this.handleClick = this.handleClick.bind(this)
	}

	handleClick() {
		this.setState({
			active: 'poop',
		})
	}
	render() {
		const {unrankedList} = this.props
		if (this.state.active) {
			return (
			<div>
				<SelectedHero heroName={this.state.active}/>
				<ul id="unranked-list">
					{unrankedList.map((item, i) => <li key={i} onClick={() => { this.setState({ active: 'butt' }) }}>{item}</li>)}
				</ul>
			</div>
		)
		} else {
			return (
			<div>
				<ul id="unranked-list">
					{unrankedList.map((item, i) => <li key={i} onClick={() => { this.setState({ active: 'butt' }) }}>{item}</li>)}
				</ul>
			</div>
		)
		}

	}
}

UnrankedList.propTypes = {
	unrankedList: PropTypes.array.isRequired
}

export default UnrankedList
