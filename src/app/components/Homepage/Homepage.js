import React from 'react';
import styles from './Homepage.css';

class Homepage extends React.Component {
  static propTypes = {

  }
  render = () => (
    <div className="Homepage">
      <div className="Homepage-presentation">
        <div className="Homepage-border">
          <h1 className="Homepage-title">I am Megan Arneau</h1>
          <h2 className="Homepage-subtitle">A Frontend Developer</h2>
        </div>
      </div>
    </div>
  )
}

export default Homepage;
