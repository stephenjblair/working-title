import React, { Component } from 'react';
import Navbar from './components/Navbar';
import Movies from './components/Movies';
import {Route, Switch} from 'react-router-dom';
import Series from './components/Series';
import Footer from './components/Footer';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <Switch>
          <Route exact path="/movies" component={Movies}/>
          <Route exact path="/series" component={Series}/>
        </Switch>
        <Footer />
      </div>
    )
  }
}

export default App;
 