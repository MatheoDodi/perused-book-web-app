import React, { Component, Fragment } from 'react';
import styled from 'styled-components';
import { getAll } from '../API/BooksAPI';

const WRAPPER = styled.div`
  margin: 0 auto;
  padding: 10rem 5rem;
  width: 81vw;
  border-radius: 15px;
  box-shadow: 0 8px 10px 4px rgba(0, 0, 0, .1);
  background: #F9FCFF;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  justify-items: center;
  grid-column-gap: 5rem;
  grid-row-gap: 15rem;
`

// const Layout = styled.div`
//   min-height: 100vh;
//   display: grid;
//   grid-template-rows: repeat(3, 1fr);

// `

class Home extends Component {
  state = {
    currReading: [],
    haveRead: [],
    willRead: []
  }

  componentDidMount() {
  }

  render() {
    return (
      <Fragment>

      </Fragment>
    );
  }
}

export default Home;