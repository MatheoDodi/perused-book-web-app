import React, { Component } from 'react';
import styled from 'styled-components';
import { getAll } from '../API/BooksAPI';

const Layout = styled.div`
  min-height: 100vh;
  display: grid;
  grid-template-rows: repeat(3, 1fr);

`

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
      <Layout>
        
      </Layout>
    );
  }
}

export default Home;