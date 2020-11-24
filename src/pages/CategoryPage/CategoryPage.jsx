import React, { Component } from 'react';

class CategoryPage extends Component {
    constructor(props) {
        super(props);
    }
    componentDidMount() {
        console.log(this.props.match.params.id)
    }
    render() {
        return <>{this.props.match.params.id}</>;
    }
}

export default CategoryPage;