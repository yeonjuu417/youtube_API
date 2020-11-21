import React from 'react';

const VideoListEntry = ({video,handleClick}) =>{
  const {url} = video.snippet.thumbnails.default;
  const {title,description} = video.snippet // 형제 데이터라서 같이 쓰기 가능 
  return (
    <div className="video-list-entry">
    <div className="media-left media-middle">
      <img className="media-object" src={url} alt="" />
    </div>
    <div className="media-body">
      <div className="video-list-entry-title" onClick={handleClick}>{title}</div>
  <div className="video-list-entry-detail">{description}</div>
    </div>
  </div>
  )}

export default VideoListEntry;
