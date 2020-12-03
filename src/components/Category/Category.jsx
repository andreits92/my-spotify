import React from 'react';
import { Link } from 'react-router-dom';
import './Category.css';

function Category(props) {
    return (
        <div>
            <h1 className="category__title">{props.name}</h1>
            <Link
                to={{
                    pathname: `/categories/${props.id}`,
                    state: { categoryName: props.name }
                }}
            >
                <img className="category__icon" src={props.icon}/>
            </Link>
        </div>
    );
}

export default Category;