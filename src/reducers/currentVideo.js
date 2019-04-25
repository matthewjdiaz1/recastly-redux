import Redux from 'redux';
// import changeVideo from '../actions/currentVideo.js';

// console.log(changeVideo.type);
var currentVideoReducer = (state = null, action) => {
  // define a reducer for the currentVideo field of our state.
  if (action.type === 'CHANGE_VIDEO') {
    return action.video || null;
  } else {
    return state;
  }
};

export default currentVideoReducer;
