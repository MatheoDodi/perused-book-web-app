import React, { Component, Fragment } from 'react';
import { Route, Switch } from 'react-router-dom';
import Header from './Components/Header/Header';
import Home from './Containers/Home';
import About from './Components/About/About';



class App extends Component {
  render() {
    return (
      <Fragment>
        <Header />
        <div style={{padding: "85px 0"}}>
          <Switch>
            <Route exact path='/about' component={About} />
            <Route exact path='/' component={Home} />
          </Switch>
        </div>
      </Fragment>
    );
  }
}

export default App;
