import React from 'react';
import axios from 'axios';

class PlayerForm extends React.Component {
    state = {
        showError: false
    }
    onSubmitPlayer(event) {
        event.preventDefault();
        if (this.refs.firstName.value == '' || this.refs.lastName.value == '' || this.refs.email.value == '') {
            this.setState({
                showError: true
            })
        } else {
            axios.post('http://localhost:8080/players', {
                email: this.refs.email.value,
                firstName: this.refs.firstName.value,
                lastName: this.refs.lastName.value,
                phone: this.refs.phone.value
            }).then((response) => {
                console.log(response)
                this.props.showList()
            }).catch((error) => {
                console.log(error)
            })
        }
    }
    render() {
        return (
            <div className="row">
                <h4 className='center'>Add a new Team Member</h4>
                <form className="col s12 center" onSubmit={this.onSubmitPlayer.bind(this)}>
                    <div className="row">
                        <div className="input-field col s2"></div>
                        <div className="input-field col s4">
                            <input id="firstName" ref="firstName" type="text" className='validate' />
                            <label>First Name *</label>
                        </div>
                        <div className="input-field col s4">
                            <input id="lastName" ref="lastName" type="text" className='validate' />
                            <label>Last Name *</label>
                        </div>
                        <div className="input-field col s2"></div>
                    </div>
                    <div className="row">
                        <div className="input-field col s2"></div>
                        <div className="input-field col s4">
                            <input id="email" ref="email" type="text" className='validate' />
                            <label>Email *</label>
                        </div>
                        <div className="input-field col s4">
                            <input id="phone" ref="phone" type="number" className='validate' />
                            <label>Phone</label>
                        </div>
                        <div className="input-field col s2"></div>
                    </div>
                    <button className='btn waves-effect waves-light center' type='submit' name='action'>SUBMIT</button>
                    <br></br>
                    {this.state.showError && <label>Please fill the Mandatory Fields</label>}
                </form>
            </div>
        );
    }
}

export default PlayerForm;