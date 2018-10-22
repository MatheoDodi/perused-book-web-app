import React, { Component, Fragment } from 'react';
import { Route, Switch } from 'react-router-dom';
import { getAll } from './API/BooksAPI';
import Header from './Components/Header/Header';
import Home from './Containers/Home';
import Search from './Containers/Search';
import About from './Components/About/About';



class App extends Component {
  state= {
    allBooks: []
  }

  componentDidMount() {
    getAll()
    .then(res => this.setState( {allBooks: res} ))
    .catch(err => console.log(err));
  };

  render() {

    const HomeWithProps = (props) => {
      return (
        <Home {...props} allBooks={this.state.allBooks} />
      )
    }

    const SearchWithProps = (props) => {
      return (
        <Search {...props} allBooks={this.state.allBooks} />
      )
    }

    return (
      <Fragment>
        <Header />
        <div style={{padding: "85px 0"}}>
          <Switch>
            <Route exact path='/about' component={About} />
            <Route exact path='/' component={HomeWithProps} />
            <Route exact path='/search' component={SearchWithProps} />
          </Switch>
        </div>
      </Fragment>
    );
  }
}

export default App;
