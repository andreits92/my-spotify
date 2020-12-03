import React from 'react';
import './Playlist.css';

function Playlist(props) {
    return (
        <div className="playlist">
            <h1 className="playlist__title">{props.name}</h1>
            <img className="playlist__icon" src={props.imageUrl} />
            <h3 className="playlist__description">{props.description}</h3>
        </div>
    );
}

export default Playlist;