import React, { Component } from 'react'
import Coordinates from './Coordinates'
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
      rankedList: [null, null, null, null, null],
      selected: null,
      xCoord: null,
      yCoord: null,
    }

    this.handleMove = this.handleMove.bind(this)
    this.handleMouseUp = this.handleMouseUp.bind(this)
    this.handleUnrankedClick = this.handleUnrankedClick.bind(this)
    this.handleRankedClick = this.handleRankedClick.bind(this)
  }
  componentDidMount() {
    window.addEventListener('mouseup', this.handleMouseUp)
  }
  handleMouseUp(e) {
    e.stopPropagation()
    this.setState({
      selected: null
    })
    console.log('iraqi')
    const position = findPosition(this.state.xCoord, this.state.yCoord)
    if(position) {
      const newRankedList = addToList(this.state.rankedList, this.state.selected, position)
      this.setState({
        rankedList: newRankedList
      })
    }

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
  handleRankedClick(selected) {
    const currentState = this.state.rankedList
    const newRankedList = currentState.map(x => x !== selected ? x : null)

    this.setState({
      selected,
      rankedList: newRankedList
    })
  }
  render() {
    const unrankedList = filterUnrankedList(heroList, this.state.rankedList)

    return this.state.selected ? (
			<div id="canvas" onMouseMove={this.handleMove}
        onMouseUp={this.handleMouseUp}
        >
				<Header />
        <Coordinates xCoord={this.state.xCoord} yCoord={this.state.yCoord} />
	      <UnrankedList unrankedList={unrankedList} handleClick={this.handleUnrankedClick} />
				<SelectedHero heroName={this.state.selected} xCoord={this.state.xCoord} yCoord={this.state.yCoord} />
				<RankedList rankedList={this.state.rankedList} handleRankedClick={this.handleRankedClick}/>
			</div>
    ) : <div id="canvas">
      <Header />
      <UnrankedList unrankedList={unrankedList} handleClick={this.handleUnrankedClick} />
      <RankedList rankedList={this.state.rankedList} handleRankedClick={this.handleRankedClick} />
    </div>
  }
}

export default App
