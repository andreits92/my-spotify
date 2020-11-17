import React, { Component } from 'react';
import {getToken} from '../../utils/utils';

class Categories extends Component {
    constructor(props) {
        super(props);
        // initial state
        this.state = {
            categories: []
        }
    }

    componentDidMount = () => {
        const url = 'https://api.spotify.com/v1/browse/categories';
        const token = getToken();
        const config = {
            method: 'GET', // POST PUT DELETE
            headers: {
                'Authorization': `Bearer ${token}`
            },
            // body: JSON.stringify({title: 'aa'}) pentru POST
        };
        fetch(url, config)
            .then(response => response.json())
            .then(data => {
                this.setState({...this.state, categories: data.categories.items})  
            })   
            .catch(err => console.log('err'));
    }

    render() {
        return <h1>Categories {this.state.categories.length}</h1>;
    }
}

export default Categories;