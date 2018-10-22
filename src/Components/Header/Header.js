import React from 'react';
import styled from 'styled-components';

const NAVBAR = styled.nav`
  height: 65px;
  background-color: #F9FCFF;
  width: 100%;
  box-shadow: 0px 5px 8px rgba(0, 0, 0, .1);
  position: fixed;
  z-index: 10;
  ul {
    list-style: none;
    padding: 0 4rem 0 4rem;
    margin: 0;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    li {
      margin-left: 5rem;
    }
    .logo {
      margin-left: 0;
      margin-right: auto;
      font-size: 3rem;
      font-weight: bold;
    }
  }
`

const Header = (props) => {
  return (
    <header>
      <NAVBAR>
        <ul>
          <li className="logo">Peruse</li>
          <li>Search</li>
          <li>About</li>
        </ul>
      </NAVBAR>
    </header>
  )
}

export default Header;