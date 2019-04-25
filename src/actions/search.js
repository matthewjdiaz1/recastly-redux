import searchYouTube from '../lib/searchYouTube.js';
import changeVideoList from './videoList.js';
import changeVideo from './currentVideo.js';
import YOUTUBE_API_KEY from '../config/youtube.js';


var handleVideoSearch = (q) => {
  // console.log(q)
  //TODO:  Write an asynchronous action to handle a video search!
  // return anon func that calls searchYoutube with q passed in 
  return (dispatch) => { searchYouTube({key: YOUTUBE_API_KEY, query: q, max: 5}, (items) => {
    console.log('items: ', dispatch(items));
    // changeVideo(items.video);
    // changeVideoList();
  });}
};

export default handleVideoSearch;