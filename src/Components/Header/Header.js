import React from 'react';
import { NavLink } from 'react-router-dom';
import { Navbar } from '../../Styles/Styles';

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