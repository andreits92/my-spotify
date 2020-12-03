import React, { Component } from 'react';
import Playlist from '../../components/Playlist/Playlist';
import {getToken} from '../../utils/utils';

class CategoryPage extends Component {
    constructor(props) {
        super(props);

        // initial state
        this.state = {
            playlists: []
        }
    }
    componentDidMount() {
        const categoryId = this.props.match.params.id;
        const token = getToken();
        const url = `https://api.spotify.com/v1/browse/categories/${categoryId}/playlists`;
        const config = {
            method: 'GET',
            headers: {
                'Authorization': `Bearer ${token}`
            }
        };
        fetch(url, config)
            .then(response => response.json())
            .then(data => {
                const simplifiedPlaylists = data.playlists.items.map(playlist => {
                    return {
                       description: playlist.description,
                       name: playlist.name,
                       id: playlist.id,
                       imageUrl: playlist.images[0].url,
                       tracksUrl: playlist.tracks.href
                    };
                });
                this.setState({...this.state, playlists: simplifiedPlaylists})
            })
            .catch(err => console.log('err'));
    }
    render() {
        const playlistsToDisplay = this.state.playlists.map(playlist => {
           return <Playlist name={playlist.name} imageUrl={playlist.imageUrl} description={playlist.description}/>
        });
        return (
            <div>
                <h1>{this.props.location.state.categoryName}</h1>
                <p>{playlistsToDisplay}</p>
            </div>
        );
    }
}

export default CategoryPage;