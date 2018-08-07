import React, { Component } from "react";
import './Navigation.css';

export class Navigation extends Component {
  navigate(id) {
    document.getElementById(id).scrollIntoView({behavior: "smooth"});
  }

  render() {
    return (
      <div className="Navigation" id="navigation">
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
