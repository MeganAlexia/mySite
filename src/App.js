import React, { Component } from 'react';
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
          <div id="App-background">
              <div id="App-container">
                <div id="App-homepage"></div>
                <Homepage/>
              </div>
              <div id="App-container">
                <div id="App-profile"></div>
                <Profile/>
              </div>
              <div id="App-container">
                <div id="App-studies"></div>
                <Studies/>
              </div>
              <div id="App-container">
                <div id="App-experiences"></div>
                <Experiences/>
              </div>
              <div id="App-container">
                <div id="App-hobbies"></div>
                <Hobbies/>
              </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
