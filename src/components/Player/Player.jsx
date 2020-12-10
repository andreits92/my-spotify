import React from 'react';

function Player(props) {
    console.log(props.trackId);
    return <iframe src={`https://open.spotify.com/embed/track/${props.trackId}`} width="300" height="380" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>
}

export default Player;