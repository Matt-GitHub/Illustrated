import React from 'react';
import ReactPlayer from 'react-player/lazy';
import './videoJS.css';

const videoJS = ({ url }) => {
  return (
    <div className="player-wrapper">
      <ReactPlayer
        className="react-player"
        url={`https://${url}`}
        width="100%"
        height="100%"
        controls={true}
      />
    </div>
  );
};

export default videoJS;
