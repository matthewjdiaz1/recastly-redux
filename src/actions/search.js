import searchYouTube from '../lib/searchYouTube.js';
import changeVideoList from './videoList.js';
import changeVideo from './currentVideo.js';
import YOUTUBE_API_KEY from '../config/youtube.js';


var handleSearchChange = (q) => {
  // console.log(q)
  //TODO:  Write an asynchronous action to handle a video search!
  // return anon func that calls searchYoutube with q passed in 
  return _.debounce((dispatch) => {
    searchYouTube({key: YOUTUBE_API_KEY, query: q}, (items) => {
      dispatch(changeVideo(items[0]));
      dispatch(changeVideoList(items));
    });
  }, 5000);
};

export default handleSearchChange;