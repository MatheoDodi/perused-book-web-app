import React, { Component, Fragment } from 'react';
import { Route, Switch } from 'react-router-dom';
import { getAll } from './API/BooksAPI';
import Header from './Components/Header/Header';
import Home from './Containers/Home';
import Search from './Containers/Search';
import About from './Components/About/About';



class App extends Component {
  state= {
    allBooks: [],
    currReading: [],
    willRead: [],
    haveRead: []
  }

  // componentDidMount() {
  //   getAll()
  //   .then(res => this.setState( {allBooks: res} ))
  //   .catch(err => console.log(err));
  // };

  render() {

    // const HomeWithProps = (props) => {
    //   return (
    //     <Home {...props}
    //      allBooks={this.state.allBooks}
    //      currReading={this.state.currReading}
    //      willRead={this.state.willRead}
    //      haveRead={this.state.haveRead} />
    //   )
    // }

    // const SearchWithProps = (props) => {
    //   return (
    //     <Search {...props}
    //      allBooks={this.state.allBooks}
    //      currReading={this.state.currReading}
    //      willRead={this.state.willRead}
    //      haveRead={this.state.haveRead} />
    //   )
    // }

    return (
      <Fragment>
        <Header />
        <div style={{padding: "85px 0"}}>
          <Switch>
            <Route exact path='/about' component={About} />
            <Route exact path='/' component={Home} />
            <Route exact path='/search' component={Search} />
          </Switch>
        </div>
      </Fragment>
    );
  }
}

export default App;
