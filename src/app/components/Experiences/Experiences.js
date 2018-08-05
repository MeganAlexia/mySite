import React from 'react';
import cssModule from 'react-css-modules';
import styles from './Experiences.css';

class Experiences extends React.Component {
  static propTypes = {

  }
  render = () => (
    <div>
      Experiences
      <ul>
        <li>
          <div>
            <h2>OAB</h2>
             Orange Applications for Business<br/>
            Stagiaire – méthode agile (Scrum)<br/>
            Réalisationd’unBackOfficeenAngular2pour les applications SmartApp Center.<br/>
             ConfigurationWebpack2,utilisationde Typescript, tests unitaires avec le framework Jasmine, authentification OAuth2.
           </div>
          </li>
          
          <li>
            <div>
              <h2>Lectra</h2>
             Création de logiciels et de systèmes de découpe automatique
Stagiaire – méthode agile (Kanban)
o Réalisationd’unchatentempsréelen Javascript utilisant des technologies récentes (Shared Worker, Websockets, ...)
o Refactorisationducodeexistantenutilisantla librairie RiotJS
o ConfigurationWebpack,utilisationdelaversion es2015 de Javascript (transpilateur Babel), tests unitaires avec le framework Jasmine
            </div>
          </li>

          <li>
            <div>
              <h2>Cenaero</h2>
Centre de recherche réalisant des méthodes et des outils de simulations numériques innovantes
Stagiaire
o Etude approfondie d’un algorithme génétique réalisé en C++
o Comparaisonauxalgorithmesprésentsdansla littérature, réalisation de tests pour l’amélioration des performances de l’algorithme.
            </div>
          </li>
      </ul>
    </div>
  )
}

export default Experiences;
