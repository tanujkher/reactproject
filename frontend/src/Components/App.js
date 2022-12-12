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
      currentPlayer: {},
      isShownList: false,
      isShownAdd: false,
      isShownCard: false
    }

    // binding the function for usage in class
    this.updateCurrentPlayer = this.updateCurrentPlayer.bind(this)
    this.showList = this.showList.bind(this)
    this.deleteUser = this.deleteUser.bind(this)
  }

  componentDidMount() {
    this.refreshPlayersList()
  }

  refreshPlayersList() {
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

  deleteUser(id){
    axios.delete(`http://localhost:8080/players/${id}`)
      .then(Response => {
        this.showList()
        console.log(Response)
      })
      .catch(error => {
        console.log(error)
      })
  }

  updateCurrentPlayer(item) {
    this.setState({
      currentPlayer: item,
      isShownCard: true
    })
  }

  hideListAdd() {
    this.setState({
      isShownList: false,
      isShownAdd: false,
      isShownCard: false
    })
  }

  showList() {
    this.setState({
      isShownList: true,
      isShownAdd: false,
      isShownCard: false
    })
    this.refreshPlayersList()
  }

  showAdd() {
    this.setState({
      isShownList: false,
      isShownAdd: true,
      isShownCard: false
    })
  }

  render() {
    return (
      <div className="container-fluid">
        <div className='row'>
          {/* <div className='col s12'>Menu</div> */}
          <nav>
            <div className="nav-wrapper blue darken-1">
              <a href="#" className="brand-logo" onClick={this.hideListAdd.bind(this)}>Team Management</a>
              <ul id="nav-mobile" className="right hide-on-med-and-down">
                <li><a href="#!" onClick={this.showList.bind(this)}>List Users</a></li>
                <li><a href="#!" onClick={this.showAdd.bind(this)}>Add Users</a></li>
              </ul>
            </div>
          </nav>
        </div>
        <div className='row'>
          <div className='col s3'>{this.state.isShownList && <PlayerList players={this.state.players} updateCurrentPlayer={this.updateCurrentPlayer} />}</div>
          <div className='col s9'>{this.state.isShownCard && this.state.isShownList && <PlayerSingle player={this.state.currentPlayer} deleteUser={this.deleteUser} />}</div>
        </div>
        <div className='row'>
          <div className='col s12'>{this.state.isShownAdd && <PlayerForm showList={this.showList} />}</div>
        </div>
      </div>
    );
  }
}

export default App;
