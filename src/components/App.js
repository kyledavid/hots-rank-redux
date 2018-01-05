import React, { Component } from 'react'
import Header from './Header'
import RankedList from './RankedList'
import SelectedHero from './SelectedHero'
import UnrankedList from './UnrankedList'

import '../css/App.css'

class App extends Component {
  render() {
    return (
			<div>
				<Header />
	      <UnrankedList />
				<SelectedHero />
				<RankedList />
			</div>
    )
  }
}

export default App
