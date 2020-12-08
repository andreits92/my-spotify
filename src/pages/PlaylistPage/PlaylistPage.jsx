import React from 'react';
import Track from '../../components/Track/Track';
import {getToken, millisToMinutesAndSeconds} from '../../utils/utils';

class PlaylistPage extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            tracks: []
        }
    }

    componentDidMount() {
        const playlistId = this.props.location.state.playlistId;
        const token = getToken();
        const url = `https://api.spotify.com/v1/playlists/${playlistId}/tracks`;
        const config = {
            method: 'GET',
            headers: {
                'Authorization': `Bearer ${token}`
            }
        };
        fetch(url, config)
        .then(response => response.json())
        .then(data => {
            console.log(data.items)
            const simplifiedTracks = data.items.map(item => {
                return {
                    id: item.track.id,
                    name: item.track.name,
                    artists: item.track.artists.map(artist => {
                        return artist.name;
                    }),
                    duration: millisToMinutesAndSeconds(item.track.duration_ms)
                };
            });
            this.setState({...this.state, tracks: simplifiedTracks})
        })
        .catch(err => console.log('err'));
    }

    render() {
        return (
            <div>
                <h1>
                    {this.props.location.state.playlistName}
                </h1>
                <section className="content__wrapper">
                    <section className="section__tracks">
                        <ul className="tracks__wrapper">
                        { 
                            this.state.tracks.map((track, index) => {
                                return (
                                    <Track
                                        key={`Track${track.id}${index}`}
                                        id={track.id}
                                        name={track.name}
                                        artists={track.artists}
                                        duration={track.duration}
                                    />
                                )
                            })
                        }
                        </ul>
                    </section>
                </section>
            </div>
        )
    }
}

export default PlaylistPage;