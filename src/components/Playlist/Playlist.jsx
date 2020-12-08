import React from 'react';
import {Link} from 'react-router-dom';
import './Playlist.css';

function Playlist(props) {
    return (
        <div className="playlist">
            <h1 className="playlist__title">{props.name}</h1>
            <Link
                to={{
                    pathname: `/playlists/${props.id}`,
                    state: {
                        playlistId: props.id,
                        playlistName: props.name
                    }
                }}
            >
                <img className="playlist__icon" src={props.imageUrl} />
            </Link>
            <h3 className="playlist__description">{props.description}</h3>
        </div>
    );
}

export default Playlist;