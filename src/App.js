import React, { Component, Fragment } from 'react';
import { Route, Switch } from 'react-router-dom';
import { getAll, update } from './API/BooksAPI';
import Header from './Components/Header/Header';
import Home from './Containers/Home';
import Search from './Containers/Search';
import About from './Components/About/About';
import { initializeState } from './Components/initializeState';
import styled from 'styled-components';

const MainContainer = styled.div`
  padding: 85px 0 60px 0;
`

class App extends Component {
  state= {
    allBooks: [],
    currentlyReading: [],
    wantToRead: [],
    read: []
  }

  changeShelvesHandler = (book, shelf) => {
    console.log(book, shelf);
    update(book, shelf)
    .then(res => getAll()
    .then(res => {
      console.log(res);
      const { currentlyReading, wantToRead, read } = initializeState(res);
      this.setState({ allBooks: res, currentlyReading, wantToRead, read });
    }));
  }

  componentDidMount() {
    getAll()
    .then(res => {
      const { currentlyReading, wantToRead, read } = initializeState(res);
      this.setState({ allBooks: res, currentlyReading, wantToRead, read });
    })
  }

  render() {

    const HomeWithProps = (props) => {
      return (
        <Home {...props}
         allBooks={this.state.allBooks}
         currentlyReading={this.state.currentlyReading}
         wantToRead={this.state.wantToRead}
         read={this.state.read}
         changeShelves={(book, shelf) => this.changeShelvesHandler(book, shelf)} />
      )
    }

    const SearchWithProps = (props) => {
      return (
        <Search {...props}
         allBooks={this.state.allBooks}
         changeShelves={(id, shelf) => this.changeShelvesHandler(id, shelf)} />
      )
    }

    return (
      <Fragment>
        <Header />
        <MainContainer>
          <Switch>
            <Route exact path='/about' component={About} />
            <Route exact path='/' component={HomeWithProps} />
            <Route exact path='/search' component={SearchWithProps} />
          </Switch>
        </MainContainer>
      </Fragment>
    );
  }
}

export default App;
