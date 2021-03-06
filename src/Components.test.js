import React from 'react'
import ReactDOM from 'react-dom'
import {mount, shallow} from 'enzyme'
import App from './components/App'
import RankedList from './components/RankedList'
import UnrankedList from './components/UnrankedList'
import SelectedHero from './components/SelectedHero'
import { addToList, findPosition, filterUnrankedList } from './utils/helperFunctions'
import listPositions from './utils/listPositions'
import heroList from './utils/heroList'


describe('The App', () => {
  const wrapper = mount(<App />)
  const listX = listPositions.x
  const listY = listPositions.y

  it('Contains a SelectedHero component when there is a state value for selected', () => {
    wrapper.setState({
      selected: 'Zarya',
      xCoord: 1,
      yCoord: 1,
    })
    expect(wrapper.find(SelectedHero).text()).toBe('Zarya')
  })
  it('Does not contain SelectedHero component when there is no value for selected in state', () => {
    wrapper.setState({selected: null})
    expect(wrapper.find(SelectedHero).length).toBe(0)
  })
  it('Coordinates for SelectedHero update on mouse move', () => {
    wrapper.setState({
      selected: 'Zarya',
      xCoord: 1,
      yCoord: 1,
  })
    wrapper.find('#canvas').simulate('mousemove', {
      clientX: 42,
      clientY: 44,
    })
    expect(wrapper.state('xCoord')).toBe(42)
    expect(wrapper.state('yCoord')).toBe(44)
  })
  it.only('Unsets selected value on mouseup', () => {
    wrapper.setState({
      selected: 'Zarya',
      xCoord: 1,
      yCoord: 1,
    })
    wrapper.find('#canvas').simulate('mouseup')
    expect(wrapper.state('selected')).toBeNull()
  })
  it('Does not have the same hero in the ranked and unranked list at the same time', () => {
    const unranked = wrapper.find(UnrankedList)
    wrapper.setState({rankedList: ['Zarya']})
    expect(unranked.prop('unrankedList').indexOf('Zarya')).toBe(0)
  })
  it('Adds selected value to props of ranked list if dropped over ranked list')
  it('Adds selected value to props in third position when dropped over x y')
  it('Returns selected value to Unranked list if Selected Hero is not dropped over a slot')
  it('Returns selected value to Unranked list at original index if not dropped over a slot')
  it('Removes selected value from Unranked list when dropped in Ranked List')
})

describe('The Filter Unranked List Function', () => {
  const rankedList = ['Zarya', 'Sonya']
  it('Will remove the ranked items from the unranked list', () => {
    expect(filterUnrankedList(heroList, rankedList).find(x => x === 'Sonya')).toBeUndefined
    expect(filterUnrankedList(heroList, rankedList).find(x => x === 'Zarya')).toBeUndefined
  })
  it('Will leave blank spots for the removed items', () => {
      expect(filterUnrankedList(heroList, rankedList)[0]).toBeNull()
    expect(filterUnrankedList(heroList, rankedList)[3]).toBeNull()
  })
  it('Will return the original list if no rankedList provided', () => {
    expect(filterUnrankedList(heroList, [])).toEqual(heroList)
  })
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
  it('Will place rank 1 item in second slot if new item placed in first slot', () => {
    const list = ['zarya', null, 'anub arak']
    expect(addToList(list, 'sonya', 1)[1]).toBe('zarya')
    expect(addToList(list, 'sonya', 1)[0]).toBe('sonya')
  })
  it('Will place rank 2 item in first slot, if third slot is full and new item placed in second slot', () => {
    const list = [null, 'zarya', 'anub arak']
    expect(addToList(list, 'sonya', 2)[0]).toBe('zarya')
    expect(addToList(list, 'sonya', 2)[1]).toBe('sonya')
  })
  it('Will bump down rank 2 item if first slot is full and new item placed in first slot', () => {
    const list = ['zarya', 'anub arak']
    expect(addToList(list, 'sonya', 1)[0]).toBe('sonya')
    expect(addToList(list, 'sonya', 1)[2]).toBe('anub arak')
  })
  it('Will bump off rank 5 item is fourth and fifth slots are full and new item placed in fourth slot', () => {
    const list = ['zarya', 'anub arak', 'muradin', 'skeleton king', 'diablo']
    expect(addToList(list, 'sonya', 4)[3]).toBe('sonya')
    expect(addToList(list, 'sonya', 4).find(x => x === 'diablo')).toBeUndefined()
  })
  it('Will remove rank 5 item if fourth slot is full and new item placed in fifth slot', () => {
    const list = ['zarya', 'anub arak', 'muradin', 'skeleton king', 'diablo']
    expect(addToList(list, 'sonya', 5)[4]).toBe('sonya')
    expect(addToList(list, 'sonya', 5).find(x => x === 'diablo')).toBeUndefined()
  })
})

describe('The Ranked List', () => {
  const propList = ['Zarya', 'Anub\' Arak', '', 'Sonya']
  const ranked = mount(<RankedList rankedList={propList} handleRankedClick={()=>{}}/>)

  it('Contains list for ranking heroes', () => {
    expect(ranked.find('ul').exists()).toBe(true)
  })

  it('Contains list items', () => {
    expect(ranked.find('ul li').exists()).toBe(true)
  })

  it('List matches order of prop list', () => {
    ranked.find('ul#ranked-list li').forEach((item, index) => {
      expect(item.text()).toBe(propList[index])
    })
  })
  it('Adds hero to selected state if clicked in slot with hero')
})

describe('The Unranked List', () => {
  const propList = ['Zarya', 'Anub\' Arak', '', 'Sonya']
  const unranked = mount(<UnrankedList unrankedList={propList} handleClick={() => {}}/>)

  it('Contains list for unranked heroes', () => {
    expect(unranked.find('ul').exists()).toBe(true)
  })

  it('Contains list items', () => {
    expect(unranked.find('ul li').exists()).toBe(true)
  })

  it('List matches order of prop list', () => {
    unranked.find('ul#unranked-list li').forEach((item, index) => {
      expect(item.text()).toBe(propList[index])
    })
  })

  it('Sets selected state for app when list item is clicked', () => {
    const wrapper = mount(<App />)
    const unranked = wrapper.find(UnrankedList)
    unranked.find('li').first().simulate('mousedown', {
      target: {
        innerText: 'Zarya'
      }
    })
    expect(wrapper.state('selected')).toBe('Zarya')
  })

  it('Removes ranked items from list with null in their spots', () => {
    const wrapper = mount(<App />)
    const unranked = wrapper.find(UnrankedList)
    wrapper.setState({rankedList: ['Zarya', 'Sonya']})
    expect(unranked.find('li').first().text()).not.toBe('Zarya')
    expect(unranked.find('li').slice(2,3).text()).not.toBe('Sonya')
  })
})

describe('The Selected Hero', () => {
  const heroName = 'Sonya'
  const selectedHero = mount(<SelectedHero heroName={heroName} xCoord={1} yCoord={1}/>)

  it('Contains list with ID of selected-hero', () => {
    expect(selectedHero.find('ul').exists()).toBe(true)
  })

  it('Displays a hero name', () => {
    expect(selectedHero.find('li').text().length).toBeGreaterThan(0)
  })

  it('Displays the hero name passed in through props', () => {
    expect(selectedHero.find('li').text()).toBe(heroName)
  })
  it('Is located in the window at its x and y props')
})
