import React from 'react';
import cssModule from 'react-css-modules';
import styles from './Studies.css';

class Studies extends React.Component {
  static propTypes = {

  }
  render = () => (
    <div className="Studies">
      <div className="Studies-list">
        <ul>
          <li>2014 – 2017 : ENSEIRB-MATMECA Télécommunications, option Technologies et Multimédia, Bordeaux</li>s
          <li>2012 – 2014 : Cycle Préparatoire de Bordeaux (CPBx) option Maths/Physique</li>
          <li>2012: Bac S - mention Très Bien</li>
        </ul>
      </div>
      <div className="Studies-description">
        why did I give up telecommunications and start developing in frontend ?
      </div>
    </div>
  )
}

export default Studies;
