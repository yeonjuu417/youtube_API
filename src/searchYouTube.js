export const searchYouTube = ({ query, max, key }, callback) => {
  // TODO
  fetch( `https://www.googleapis.com/youtube/v3/search?key=${key}&part=snippet&regionCode=KR&maxResults=${max}&type=video&q=${query}`)
  .then(res => res.json())
  .then(data => callback(data.items))
};
