import styled from 'styled-components'

export const UList = styled.ul`
position: absolute;
top: 100px;
left: 100px;
list-style-type: none;
padding-left: 0;
width: 200px;
li {
  background-color: #fff;
  height: 40.4px;
  line-height: 40.4px;
  padding: 0 10px;
}
`

export const RList = styled.ul`
width: 200px;
position: absolute;
left: 300px;
top: 100px;
list-style-type: none;
li {
  &:first-of-type {
    border-top: 1px solid red;
  }
  border: 1px solid red;
  border-top: none;
  height: 40.4px;
  line-height: 40.4px;
  padding: 0 10px;
}
`
export const Title = styled.h1`
color: red;
`
export const SelHero = styled.ul`
background-color: #fff;
list-style-type: none;
padding-left: 10px;
height: 40.4px;
line-height: 40.4px;
li {
  width: 190px;
}
`
