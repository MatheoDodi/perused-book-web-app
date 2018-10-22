import React, { Component } from 'react';
import styled from 'styled-components';
// import { UndrawBibliophile } from 'react-undraw-illustrations';

const Layout = styled.div`
  min-height: 100vh;
  display: grid;
  grid-template-rows: 1fr repeat(3, max-content) 1fr;
`

class Home extends Component {

  render() {
    return (
      <Layout>
      </Layout>
    );
  }
}

export default Home;