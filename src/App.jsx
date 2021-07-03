import React, { useState, useEffect, useContext } from 'react'
import styled from 'styled-components'
import './App.css'

import { DataProvider  } from './context/DataContenxt';
import Profile from './components/Profile'

function App() {


  // const color = '#5E17EB'
  const [color, setColor] = useState('')

  const handleData = (data) => {
    console.log(data, 'data app');
    setColor(data.background)
  }

  return (
    <DataProvider>
      <Header color={color} >
        <div className="content"><h4>Rm Links</h4></div>
      </Header>
      <Profile handleData={handleData}
      ></Profile>
      <FooterLink>
        <p> Creado con ❤ por <span>@robertfronted</span> &copy; 2021</p>
        <br />
        <p><a href="https://github.com/robertfrontend/RmLinks" target="_blank">
          Repositorio⭐<i className="fab fa-github"></i>
        </a></p>
      </FooterLink>
    </DataProvider>
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
    color:  ${color => color.color === '#5E17EB' ? '#5E17EB' : 'white'};
    padding: 0.3em;
    padding-left: 1em;
    background-color: ${color => color.color === '#5E17EB' ? 'white' : '#5E17EB'};

    width: 30%;
    margin-left: auto;
    border-bottom-left-radius: 20px;
  }
`

const FooterLink = styled.footer`
  width: 100%;
  background-color: ${color => color.color ? '#5E17EB' : 'white'|| 'white'};
  padding: 1em 0;
  text-align: center;
  color:  ${color => color.color ? 'white' : '#5E17EB'|| 'white'};
  text-decoration: none;
  font-weight: 300;
  p {
    letter-spacing: 0.2px;
    span {
      font-weight: 600;
    }
    a {
      text-decoration: none;
    }
    i {
      color: #2c3e50;
      font-size: 1.2em;
       padding-left: 0.2em;
    }
  }
`


export default App
