import React, { Component } from "react";
import {
  NavLink,
  HashRouter
} from "react-router-dom";
import './Navigation.css';

export class Navigation extends Component {
  navigate(id) {
    console.log('id ', id);
    document.getElementById(id).scrollIntoView();
  }

  render() {
    return (
      <div className="Navigation">
        <ul className="Navigation-menu">
          <li className="Navigation-item" onClick={() => this.navigate('App-homepage')}>
              <h1 className="Navigation-title">MY SITE</h1>
          </li>
          <li className="Navigation-item" onClick={() => this.navigate('App-profile')}>Profile</li>
          <li className="Navigation-item" onClick={() => this.navigate('App-studies')}>Studies</li>
          <li className="Navigation-item" onClick={() => this.navigate('App-experiences')}>Experiences</li>
          <li className="Navigation-item" onClick={() => this.navigate('App-hobbies')}>Hobbies</li>
        </ul>
      </div>
    );
  }
}
