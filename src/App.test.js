import React from 'react'
import ReactDOM from 'react-dom'
import {shallow} from 'enzyme'
import App from './components/App'
import RankedList from './components/RankedList'

describe('The Ranked List', () => {
  const propList = ['Zarya', 'Anub\' Arak', '', 'Sonya']
  const ranked = shallow(<RankedList rankedList={propList}/>)

  it('contains list with ID of ranked-list', () => {
    expect(ranked.find('ul#ranked-list').exists()).toBe(true)
  })

  it('contains list items', () => {
    expect(ranked.find('ul#ranked-list li').exists()).toBe(true)
  })

  it('List matches order of prop list', () => {
    ranked.find('ul#ranked-list li').forEach((item, index) => {
      expect(item.text()).toBe(propList[index])
    })
  })
})
