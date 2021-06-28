import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import './App.css'
import Profile from './components/Profile'

function App() {
  const [count, setCount] = useState(0)
  const color = '#5E17EB'

  const [colorfront, setColorFront] = useState(false)

  useEffect(() => {
    if (color === '#5E17EB') {
      setColorFront(false)
    } else {
      setColorFront(true)
    }
  }, [])
  

  return (
    <>
      <Header color={colorfront}>
        <div className="content"><h4>Rm Links</h4></div>
      </Header>
      <Profile color={color} ></Profile>
      <FooterLink href="#" >
        Create your link
      </FooterLink>
    </>
  )
}

const Header = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  font-weight: 600;
  .content{
    text-align: left;
    width: auto;
    color:  ${color => color.color ? 'white' : '#5E17EB'|| 'white'};
    padding: 0.3em;
    padding-left: 1em;
    background-color: ${color => color.color ? '#5E17EB' : 'white'|| 'white'};
    width: 30%;
    margin-left: auto;
    border-bottom-left-radius: 20px;
  }
`

const FooterLink = styled.a`
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  width: 100%;
  background-color: ${color => color.color ? '#5E17EB' : 'white'|| 'white'};
  padding: 0.3em;
  text-align: center;
  color:  ${color => color.color ? 'white' : '#5E17EB'|| 'white'};
  text-decoration: none;
  font-weight: 600;
`


export default App
