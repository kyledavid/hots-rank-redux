import React from 'react'
import ReactDOM from 'react-dom'
import {mount, shallow} from 'enzyme'
import App from './components/App'
import RankedList from './components/RankedList'
import UnrankedList from './components/UnrankedList'
import SelectedHero from './components/SelectedHero'
import { findPosition } from './utils/checkCoordinates'
import listPositions from './utils/listPositions'

describe('The App', () => {
  const app = mount(<App />)

  it('Contains a SelectedHero component when there is a state value for selected', () => {
    app.setState({selected: 'Zarya'})
    expect(app.find(SelectedHero).text()).toBe('Zarya')
  })
  it('Does not contain SelectedHero component when there is no value for selected in state', () => {
    app.setState({selected: null})
    expect(app.find(SelectedHero).length).toBe(0)
  })
  it('Coordinates for SelectedHero update on mouse move', () => {
    app.setState({selected: 'Zarya'})
    app.find('#canvas').simulate('mousemove', {
      clientX: 42,
      clientY: 44,
    })
    expect(app.state('xCoord')).toBe(42)
    expect(app.state('yCoord')).toBe(44)
  })
  it('Unsets selected value on mouseup', () => {
    app.setState({selected: 'Zarya'})
    app.find('#canvas').simulate('mouseup')
    expect(app.state('selected')).toBeNull()
  })
  it('Adds selected value to props of ranked list if dropped over ranked list')
  it('Adds selected value to props in third position when dropped over x y')
  it('Returns selected value to Unranked list if Selected Hero is not dropped over a slot')
  it('Returns selected value to Unranked list at original index if not dropped over a slot')
  it('Removes selected value from Unranked list when dropped in Ranked List')
})

describe('The Ranked List Logic', () => {
  const listX = listPositions.x
  const listY = listPositions.y
  it('Will place item in list if x and y coordinates within range', () => {
    expect(findPosition(listX['low'],listY['1']['low'])).toBeTruthy()
  })
  it('Will place new item in third slot if given the appropriate coordinates', () => {
    expect(findPosition(listX['low'],listY['3']['low'])).toBe(3)
  })
  it('Will place rank 1 item in second slot if new item placed in first slot')
  it('Will place rank 2 item in first slot, if third slot is full and new item placed in second slot')
  it('Will remove rank 1 item if second slot is full and new item placed in first slot')
  it('Will remove rank 4 item is fourth and fifth slots are full and new item placed in fourth slot')
  it('Will remove rank 5 item if fourth slot is full and new item placed in fifth slot')
})

describe('The Ranked List', () => {
  const propList = ['Zarya', 'Anub\' Arak', '', 'Sonya']
  const ranked = shallow(<RankedList rankedList={propList}/>)

  it('Contains list with ID of ranked-list', () => {
    expect(ranked.find('ul#ranked-list').exists()).toBe(true)
  })

  it('Contains list items', () => {
    expect(ranked.find('ul#ranked-list li').exists()).toBe(true)
  })

  it('List matches order of prop list', () => {
    ranked.find('ul#ranked-list li').forEach((item, index) => {
      expect(item.text()).toBe(propList[index])
    })
  })
})

describe('The Unranked List', () => {
  const propList = ['Zarya', 'Anub\' Arak', '', 'Sonya']
  const unranked = mount(<UnrankedList unrankedList={propList}/>)

  it('Contains list with ID of ranked-list', () => {
    expect(unranked.find('ul#unranked-list').exists()).toBe(true)
  })

  it('Contains list items', () => {
    expect(unranked.find('ul#unranked-list li').exists()).toBe(true)
  })

  it('List matches order of prop list', () => {
    unranked.find('ul#unranked-list li').forEach((item, index) => {
      expect(item.text()).toBe(propList[index])
    })
  })

  it('Contains state for active hero that is null by default', () => {
    expect(unranked.state('active')).toBe(null)
  })

  it('Contains string in its active state on click', () => {
    unranked.find('li').first().simulate('click')
    expect(unranked.state('active')).toBe('butt')
  })

  it('Creates Selected Hero component when state is active', () => {
    unranked.setState({ active: 'Zarya' })
    expect(unranked.find(SelectedHero).text()).toBe('Zarya')
  })
})

describe('The Selected Hero', () => {
  const heroName = 'Sonya'
  const selectedHero = shallow(<SelectedHero heroName={heroName}/>)

  it('Contains list with ID of selected-hero', () => {
    expect(selectedHero.find('ul#selected-hero').exists()).toBe(true)
  })

  it('Displays a hero name', () => {
    expect(selectedHero.find('li').text().length).toBeGreaterThan(0)
  })

  it('Displays the hero name passed in through props', () => {
    expect(selectedHero.find('ul li').text()).toBe(heroName)
  })
})
