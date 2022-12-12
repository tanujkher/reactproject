import React from 'react';
import axios from 'axios';

class PlayerForm extends React.Component {
    onSubmitPlayer(event) {
        event.preventDefault();
        axios.post('http://localhost:8080/players', {
            firstName: this.refs.firstName.value,
            lastName: this.refs.lastName.value,
            phone: this.refs.phone.value,
            email: this.refs.email.value
        }).then((response) => {
            console.log(response)
        }).catch((error) => {
            console.log(error)
        })
    }
    render() {
        return (
            <div className="row">
                <h4 className='center'>Add a new Team Member</h4>
                <form className="col s12 center" onSubmit={this.onSubmitPlayer.bind(this)}>
                    <div className="row">
                        <div className="input-field col s2"></div>
                        <div className="input-field col s4">
                            <input id="firstName" ref="firstName" type="text" />
                            <label>First Name</label>
                        </div>
                        <div className="input-field col s4">
                            <input id="lastName" ref="lastName" type="text" />
                            <label>Last Name</label>
                        </div>
                        <div className="input-field col s2"></div>
                    </div>
                    <div className="row">
                        <div className="input-field col s2"></div>
                        <div className="input-field col s4">
                            <input id="phone" ref="phone" type="text" />
                            <label>Phone</label>
                        </div>
                        <div className="input-field col s4">
                            <input id="email" ref="email" type="text" />
                            <label>Email</label>
                        </div>
                        <div className="input-field col s2"></div>
                    </div>
                    <button className='btn waves-effect waves-light center' type='submit' name='action'>SUBMIT</button>
                </form>
            </div>
        );
    }
}

export default PlayerForm;