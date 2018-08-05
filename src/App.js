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
        <div className="App-content">
          <div id="App-homepage">
            <Homepage/>
          </div>
          <div id="App-profile">
            <Profile/>
          </div>
          <div id="App-studies">
            <Studies/>
          </div>
          <div id="App-experiences">
            <Experiences/>
          </div>
          <div id="App-hobbies">
            <Hobbies/>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
