import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import {isTokenValid} from '../../utils/utils';

class Login extends Component {
    constructor(props) {
        super(props);
        // initializare
        this.state = {
            value: '',
            other: ''
        }
    }

    onChangeHandler = (event) => {
        const newValue = event.target.value;
        // obiect nou cu datele din cel anterior!!!
        this.setState({...this.state, value: newValue});
    }

    onClickHandler = () => {
        const encodedClientId = encodeURIComponent(this.state.value)
        const encodedRedirectURI = encodeURIComponent('http://localhost:3000/callback')
        // response_type = token inseamna ca vreau sa fac IMPLICIT FLOW
        window.location.href = `https://accounts.spotify.com/authorize?client_id=${encodedClientId}&redirect_uri=${encodedRedirectURI}&response_type=token`
    }
 
    render() {
        if (isTokenValid()) {
            this.props.history.push('/home');
        }
        return (
            <div>
                <h1> Login </h1>
                <h1>Value from state is: {this.state.value}</h1>
                <input 
                    type="text"
                    placeholder="Client ID"
                    name="client-id"
                    value={this.state.value}
                    onChange={this.onChangeHandler}
                />
                <button 
                    type="button"
                    className="btn btn-success"
                    onClick={this.onClickHandler}    
                >
                    Login
                </button>
            </div>
        );
    }
}

export default withRouter(Login);