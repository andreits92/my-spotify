import React, { Component } from 'react';
import {getToken} from '../../utils/utils';
import Category from '../../components/Category/Category';

class CategoriesPage extends Component {
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
            method: 'GET',
            headers: {
                'Authorization': `Bearer ${token}`
            }
        };
        fetch(url, config)
            .then(response => response.json())
            .then(data => {
                this.setState({...this.state, categories: data.categories.items})  
            })   
            .catch(err => console.log('err'));
    }

    render() {
        console.log(this.state.categories[0])
        const categories = this.state.categories.map(category => {
            return <Category name={category.name} icon={category.icons[0].url} id={category.id} />
        });

        return ( 
            <div className="categories">
                <h1>Categories {this.state.categories.length}</h1>
                {categories}
            </div>
        );
    }
}

export default CategoriesPage;