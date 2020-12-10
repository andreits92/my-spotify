import React from 'react';
import './Track.css';

function Track(props) {
    return (
        // se apeleaza functia (handlerul) din parinte (PlaylistPage)
        <li onClick={() => { props.pickTrack(props.id); }}>
            <section className="track__wrapper">
                <section className="track__main">
                    <h3>
                        {props.name}
                    </h3>
                    <section>
                        <ol className="artist__wrapper">
                            {
                                props.artists.map(artist => {
                                    return (
                                        <li key={`Artist${artist}`} className="artist">
                                            {artist}
                                        </li>
                                    )
                                })
                            }
                        </ol>
                    </section>
                </section>
                <p className="track__duration">
                    {props.duration}
                </p>
            </section>
        </li>
    );
}

export default Track;