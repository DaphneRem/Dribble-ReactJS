import React from 'react';
import styles from './Li.css';

class Li extends React.Component {

    render() {

//this.props.tabs
      // Faire une section type pour toutes les li et changer ses props dans le Nav
      // Faire une boucle dans le <a> en appelant les composants de tabs
        return (
          <div className="dropdown">
            <button className="dropbtn">{this.props.name}</button>
            <div className="dropdown-content">
            {this.props.dropdown.map((e) => {
            return (<a key={e.id} href={e.url}>{e.title}</a>)
            })}
            </div>
          </div>

        );
    }
}

export default Li;
