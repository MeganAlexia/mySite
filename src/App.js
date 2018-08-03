import React, { Component } from 'react';
import { Route, HashRouter } from 'react-router-dom';
import Experiences from './app/components/Experiences';
import { Navigation } from './core/Navigation/Navigation';
import Profile from './app/components/Profile';
import Studies from './app/components/Studies';
import Hobbies from './app/components/Hobbies';
import Homepage from './app/components/Homepage';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navigation/>
        <HashRouter>
          <div className="App-router">
            <Route exact path="/" component={Homepage}/>
            <Route path="/profile" component={Profile}/>
            <Route path="/studies" component={Studies}/>
            <Route path="/experiences" component={Experiences}/>
            <Route path="/hobbies" component={Hobbies}/>
          </div>
        </HashRouter>
      </div>
    );
  }
}

export default App;
