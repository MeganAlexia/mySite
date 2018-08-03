import React from 'react';
import styles from './Homepage.css';

class Homepage extends React.Component {
  static propTypes = {

  }
  render = () => (
    <div className="Homepage">
      <div className="Homepage-presentation">
        <div className="Homepage-title">I am Megan Arneau</div>
        <div className="Homepage-subtitle">A Frontend Developer</div>
      </div>
    </div>
  )
}

export default Homepage;
