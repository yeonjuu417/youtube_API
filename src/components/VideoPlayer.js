import React from 'react';

const VideoPlayer = ({video}) => {
  
  const{videoId} = video.id;
  const{title,description} = video.snippet;
  const url = "https://www.youtube.com/embed/";
  return (
  <div className="video-player">
    <div className="embed-responsive embed-responsive-16by9">
      <iframe className="embed-responsive-item"
        src={url+videoId} allowFullScreen></iframe>
    </div>
    <div className="video-player-details">
      <h3>{title}</h3>
      <div>{description}</div>
    </div>
  </div>
  )
};

export default VideoPlayer;
