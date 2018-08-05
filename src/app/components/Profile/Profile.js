import React from 'react';
import cssModule from 'react-css-modules';
import styles from './Profile.css';

class Profile extends React.Component {
  static propTypes = {

  }
  render = () => (
    <div className="Profile">
      <div className="Profile-picture">
        <span>Who am I ?</span> PICTURE
      </div>
      <div className="Profile-phone">
        <span>Phone number</span>: (+33)646280752
      </div>
      <div className="Profile-adress">
        <span>Where do I live ?</span> Bordeaux, France
      </div>
      <div className="Profile-email">
        <span>How to contact me ?</span> megan.arneau@gmail.com
      </div>
      <div className="Profile-languages">
        <span>What can I speak ?</span>
        <ul>
          <li>Français</li>
          <li>English</li>
        </ul>
      </div>
      <div className="Profile-skills">
        <ul>
          <li>Javascript</li>
          <li>HTML5</li>
          <li>CSS</li>
          <li>Angular 2+</li>
          <li>ReactJS</li>
          <li>Tests unitaires (Karma, Jest, Jasmine)</li>
          <li>Test E2E (Cypress)</li>
          <li>Git, Gitlab, Github</li>
        </ul>
      </div>
    </div>
  )
}

export default Profile;
