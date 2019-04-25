import { connect } from 'react-redux';
import VideoList from './../components/VideoList.js';
import changeVideo from './../actions/currentVideo.js';

var VideoListContainer = () => {
  var mapStateToProps = (state) => {
    return {
      videos: state.videos
    }
  };

  var mapDispatchToProps = (dispatch) => {
    return { 
      changedVideo: videos => {dispatch(changeVideo(videos)) } 
    };
  }

  return connect(mapStateToProps, mapDispatchToProps)(VideoList);
};

//TODO: define a VideoListContainer component which will hook up your action
// dispatchers with your VideoList component props.

export default VideoListContainer();
