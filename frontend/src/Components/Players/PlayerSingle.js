import axios from 'axios';
import React, { useState } from 'react';

class PlayerSingle extends React.Component {
    constructor(props) {
        super(props)
        console.log(this.props.player)
        this.onSubmitPlayer = this.onSubmitPlayer.bind(this)
    }

    onSubmitPlayer() {
        if (this.refs.firstName.value == '' || this.refs.lastName.value == '' || this.refs.email.value == '') {
            this.props.toggleErrorInEdit()
        } else {
            axios.put(`http://localhost:8080/players/${this.props.player._id}`, {
                email: this.refs.email.value,
                firstName: this.refs.firstName.value,
                lastName: this.refs.lastName.value,
                phone: this.refs.phone.value
            })
            .then((Response) => {
                console.log(Response)
                this.props.showList()
            })
            .catch((error) => {
                console.log(error)
            })
        }
    }

    render() {
        return (
            <div className="row">
                <div className="col s7">
                    <div className="card">
                        <div className="card-image">
                            <img src="sample-1.jpg" alt='User' />
                            {!this.props.isEditing && <a onClick={this.props.deleteUser.bind(this, this.props.player._id)} className="btn-floating halfway-fab waves-effect waves-light teal"><i className="material-icons">delete_forever</i></a>}
                        </div>
                        <br></br>
                        {this.props.isEditing ?
                            <div>
                                <form className="col s12 center" onSubmit={this.onSubmitPlayer.bind(this)}>
                                    <div className="row">
                                        <div className="input-field col s2"></div>
                                        <div className="col s4">
                                            <label>First Name *</label>
                                            <input id="firstName" ref="firstName" type="text" defaultValue={this.props.player.firstName} className='validate' />
                                        </div>
                                        <div className="col s4">
                                            <label>Last Name *</label>
                                            <input id="lastName" ref="lastName" type="text" defaultValue={this.props.player.lastName} className='validate' />
                                        </div>
                                        <div className="input-field col s2"></div>
                                    </div>
                                    <div className="row">
                                        <div className="input-field col s2"></div>
                                        <div className="col s4">
                                            <label>Email *</label>
                                            <input id="email" ref="email" type="text" defaultValue={this.props.player.email} className='validate' />
                                        </div>
                                        <div className="col s4">
                                            <label>Phone</label>
                                            <input id="phone" ref="phone" type="number" defaultValue={this.props.player.phone} className='validate' />
                                        </div>
                                        <div className="input-field col s2"></div>
                                    </div>
                                    <button className='btn waves-effect waves-light center' type='submit' name='action'>SUBMIT</button>
                                    <br></br>
                                    {this.props.showError && <label>Please fill the Mandatory Fields</label>}
                                </form>
                                <div className="card-content">&nbsp;</div>
                            </div> :
                            <div className="card-content">
                                <span style={{ color: 'teal' }} className="card-title activator">{this.props.player.firstName} {this.props.player.lastName}<i onClick={() => this.props.toggleIsEditingCard()} className="material-icons right">edit</i></span>
                                <br></br>
                                <p>Phone : {this.props.player.phone === undefined || this.props.player.phone === '' || this.props.player.phone === null ? 'NA' : this.props.player.phone} &nbsp;&nbsp;&nbsp;&nbsp;-&nbsp;&nbsp;&nbsp;&nbsp; Email : {this.props.player.email === undefined || this.props.player.email === '' || this.props.player.email === null ? 'NA' : this.props.player.email}</p>
                            </div>}
                    </div>
                </div>
            </div>
        );
    }
}

export default PlayerSingle;