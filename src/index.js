import React from 'react';
import ReactDOM from 'react-dom';

import App from './components/App';
import { YOUTUBE_API_KEY } from '../config/youtube';

const title = '여기에 App 컴포넌트를 렌더링하세요';
console.log(App);
console.log(YOUTUBE_API_KEY);

ReactDOM.render(
  <div>{title}</div>,
  document.getElementById('app')
);