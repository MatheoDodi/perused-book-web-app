import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

const Navbar = styled.nav`
  height: 67.5px;
  background-color: #F9FCFF;
  width: 100%;
  box-shadow: 0px 5px 8px rgba(0, 0, 0, .1);
  position: fixed;
  z-index: 10;
  ul {
    list-style: none;
    width: 85%;
    padding: 0 4rem;
    margin: 0 auto;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    a {
      margin-left: 5rem;
      text-decoration: none;
    }
    .logo {
      margin-left: 0;
      margin-right: auto;
      font-size: 4rem;
      font-weight: bold;
      color: #6B6CF2;
    }
  }
`

const Header = (props) => {
  return (
    <header>
      <Navbar>
        <ul>
          <NavLink exact to='/' className="logo">Peruse</NavLink>
          <NavLink exact to='/' className="un">Home</NavLink>
          <NavLink to='/search' className="un">Search</NavLink>
          <NavLink to='/about' className="un">About</NavLink>
        </ul>
      </Navbar>
    </header>
  )
}

export default Header;