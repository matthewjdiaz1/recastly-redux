import Redux from 'redux';
// import changeVideo from '../actions/currentVideo.js';

// console.log(changeVideo.type);
var currentVideoReducer = (state, action) => {
  // define a reducer for the currentVideo field of our state.
  console.log('action: ', action);
  console.log('state: ', state);
  // console.log(CHANGE_VIDEO);
  // console.log('test');
  if (action.type === 'CHANGE_VIDEO') {
    return Object.assign({}, state, {
      script: action.video.script
    })
  } else {
    return null;
  }
};

export default currentVideoReducer;
