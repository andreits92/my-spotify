import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import queryString from 'query-string';

class Callback extends Component {
    componentDidMount() {
        // tot ce vine dupa hashtag (#)
        const hash = this.props.location ? this.props.location.hash : '';
        if (hash) {
            // parseaza transforma din stringul ala in object js
            const parsedString = queryString.parse(hash);
            // creaza un alt obiect pe baza infomatiilor din hash
            const token = {
                token: parsedString.access_token,
                expiration: new Date().getTime() + parsedString.expires_in * 1000 
            };
            // seteaza in local storage acel token pentru a fi folosit mai tarziu din
            // alta parte a aplicatiei cand vrem sa comunicam cu serverul
            localStorage.setItem('token', JSON.stringify(token));
        }
        if (this.props.history) {
            // redirecteaza catre pagina de root
            this.props.history.push('/');
        } 
    }

    render() {
        return null;
    }
}
 
export default withRouter(Callback);