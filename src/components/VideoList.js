import React from 'react';
import VideoListEntry from './VideoListEntry';

// 실제 API를 쓰게 되면 이 fakeData는 더이상 import 하지 않아야 합니다.
import { fakeData } from './__test__/fakeData';
console.log(fakeData)

const VideoList = ({videos,handleClick}) => (//props.videos 구조분해 할당 공부 하기 
  <div className="video-list media">
    {videos.map(el => <VideoListEntry key = {el.etag} video = {el} handleClick={handleClick}/>)}
    </div>
);

export default VideoList;
