import React from 'react';
import axios from 'axios';
import './App.css';

import PlayerSingle from './Players/PlayerSingle';
import PlayerForm from './Players/PlayerForm';
import PlayerList from './Players/PlayerList';

class App extends React.Component {
  constructor(prop) {
    super(prop)
    this.state = {
      players: [],
      currentPlayer: {}
    }

    // binding the function for usage in class
    this.updateCurrentPlayer = this.updateCurrentPlayer.bind(this)
  }

  componentDidMount() {
    const url = 'http://localhost:8080/players'

    axios.get(url)
      .then(Response => {
        this.setState({
          players: Response.data
        })
      })
      .catch(error => {
        console.log(error)
      })
  }

  updateCurrentPlayer(item) {
    this.setState({
      currentPlayer: item
    })
  }

  render() {
    return (
      <div className="container-fluid">
        <div className='row'>
          {/* <div className='col s12'>Menu</div> */}
          <nav>
            <div className="nav-wrapper blue darken-1">
              <a href="#" className="brand-logo">Team Management</a>
            </div>
          </nav>
        </div>
        <div className='row'>
          <div className='col s3'><PlayerList players={this.state.players} updateCurrentPlayer={this.updateCurrentPlayer} /></div>
          <div className='col s9'><PlayerSingle player={this.state.currentPlayer} /></div>
        </div>
        <div className='row'>
          <div className='col s12'><PlayerForm /></div>
        </div>
      </div>
    );
  }
}

export default App;
