import React from 'react';
import './Category.css';

function Category(props) {
    return (
        <div>
            <h1 className="category__title">{props.name}</h1>
            <img className="category__icon" src={props.icon}/>
        </div>
    );
}

export default Category;