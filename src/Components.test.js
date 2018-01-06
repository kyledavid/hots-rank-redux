import React from 'react'
import ReactDOM from 'react-dom'
import {shallow} from 'enzyme'
import App from './components/App'
import RankedList from './components/RankedList'
import UnrankedList from './components/UnrankedList'
import SelectedHero from './components/SelectedHero'

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
  const unranked = shallow(<UnrankedList unrankedList={propList}/>)

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
