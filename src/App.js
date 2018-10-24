import React, { Component, Fragment } from 'react';
import { Route, Switch, withRouter } from 'react-router-dom';
import { getAll, update } from './API/BooksAPI';
import Header from './Components/Header/Header';
import Home from './Containers/Home';
import Search from './Containers/Search';
import About from './Components/About/About';
import { initializeState } from './Components/initializeState';
import { MainContainer } from './Styles/Styles';

class App extends Component {
  state= {
    allBooks: [],
    currentlyReading: [],
    wantToRead: [],
    read: [],
    location: ''
  }

  changeShelvesHandler = (book, shelf, path) => {
    update(book, shelf)
    .then(res => getAll()
    .then(res => {
      const { currentlyReading, wantToRead, read } = initializeState(res);
      this.setState({ allBooks: res, currentlyReading, wantToRead, read });
      if (path === '/search') {
        this.props.history.push('/');
      }
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
         changeShelves={(book, shelf, path) => this.changeShelvesHandler(book, shelf, path)} />
      )
    }

    const SearchWithProps = (props) => {
      return (
        <Search {...props}
         allBooks={this.state.allBooks}
         changeShelves={(id, shelf, path) => this.changeShelvesHandler(id, shelf, path)} />
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

export default withRouter(App);
