import React, { Component } from 'react';
import Navbar from './components/Navbar';
import Movies from './components/Movies';
import {Route, Switch} from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <Switch>
          <Route exact path="/movies" component={Movies}/>
        </Switch>
      </div>
    )
  }
}

export default App;
 