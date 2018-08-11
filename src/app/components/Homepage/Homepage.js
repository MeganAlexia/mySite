import React from 'react';
import styles from './Homepage.css';

class Homepage extends React.Component {
  static propTypes = {

  }
  render = () => (
    <div className="Homepage">
      <div className="Homepage-presentation">
        <div className="Homepage-border">
          <p className="Homepage-above-title"><span>I am</span></p>
          <h1 className="Homepage-title">Megan Arneau</h1>
          <p className="Homepage-under-title"><span>Frontend Developer</span></p>
        </div>
      </div>
    </div>
  )
}

export default Homepage;
