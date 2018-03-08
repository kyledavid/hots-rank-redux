import React, { Component } from 'react'
import Header from './Header'
import RankedList from './RankedList'
import SelectedHero from './SelectedHero'
import UnrankedList from './UnrankedList'
import heroList from '../utils/heroList'
import listPositions from '../utils/listPositions.json'
import { addToList, findPosition, filterUnrankedList } from '../utils/helperFunctions'

import '../css/App.css'

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      rankedList: [],
      selected: null,
      unrankedList: heroList,
      xCoord: null,
      yCoord: null,
    }

    this.handleMove = this.handleMove.bind(this)
    this.handleMouseUp = this.handleMouseUp.bind(this)
    this.handleUnrankedClick = this.handleUnrankedClick.bind(this)
  }
  componentDidMount() {
    window.addEventListener('mouseup', this.handleMouseUp)
  }
  handleMouseUp() {
    this.setState({
      selected: null
    })
  }
  handleMove(e) {
    const x = e.clientX
    const y = e.clientY
    this.setState({
      xCoord: x,
      yCoord: y
    })
  }
  handleUnrankedClick(selected) {
    this.setState({
      selected
    })
  }
  render() {
    return this.state.selected ? (
			<div id="canvas" onMouseMove={this.handleMove}
        onMouseUp={this.handleMouseUp}
        >
				<Header />
	      <UnrankedList unrankedList={this.state.unrankedList} handleClick={this.handleUnrankedClick} />
				<SelectedHero heroName={this.state.selected} />
				<RankedList rankedList={this.state.rankedList} />
			</div>
    ) : <div id="canvas">
      <Header />
      <UnrankedList unrankedList={this.state.unrankedList} handleClick={this.handleUnrankedClick} />
      <RankedList rankedList={this.state.rankedList} />
    </div>
  }
}

export default App
