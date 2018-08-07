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
          <div className="App-background">
              <div className="App-container">
                <div className="App-picture" id="App-homepage"></div>
                <Homepage/>
              </div>
              <div className="App-container">
                <div className="App-picture" id="App-profile"></div>
                <Profile/>
              </div>
              <div className="App-container">
                <div className="App-picture" id="App-studies"></div>
                <Studies/>
              </div>
              <div className="App-container">
                <div className="App-picture" id="App-experiences"></div>
                <Experiences/>
              </div>
              <div className="App-container">
                <div className="App-picture" id="App-hobbies"></div>
                <Hobbies/>
              </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
