import React, { Component } from "react";
import {
  NavLink,
  HashRouter
} from "react-router-dom";
import './Navigation.css';

export class Navigation extends Component {
  render() {
    return (
      <HashRouter>
        <div className="Navigation">
          <ul className="Navigation-menu">
            <li className="Navigation-item">
              <NavLink className="Navigation-link" to="/">
                <h1 className="Navigation-title">MY SITE</h1>
              </NavLink>
            </li>
            <li className="Navigation-item"><NavLink className="Navigation-link" to="/profile">Profile</NavLink></li>
            <li className="Navigation-item"><NavLink className="Navigation-link" to="/studies">Studies</NavLink></li>
            <li className="Navigation-item"><NavLink className="Navigation-link" to="/experiences">Experiences</NavLink></li>
            <li className="Navigation-item"><NavLink className="Navigation-link" to="/hobbies">Hobbies</NavLink></li>
          </ul>
        </div>
      </HashRouter>
    );
  }
}
