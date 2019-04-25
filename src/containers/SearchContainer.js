import { connect } from 'react-redux';
import Search from './../components/Search.js';
import handleSearchChange from '../actions/search.js';
// import handleVideoSearch from '../actions/search.js';

// FIX VARIABLE NAMES FOR SPECS TO PASS 

var SearchContainer = () => {
  var mapStateToProps = (state) => {
    return {
      items: state.items,
      hasErrored: state.itemsHasErrored,
      isLoading: state.itemsIsLoading
    }
  };

  var mapDispatchToProps = (dispatch) => {
    return {
      fetchData: (url) => dispatch(handleSearchChange(url))
    };
  };

  return connect(mapStateToProps, mapDispatchToProps)(Search);
};

//TODO: define a SearchContainer component which will hook up your action
// dispatchers with your search component props.
//HINT: use react-redux 'connect' method to generate a container component from
//state and dispatch mappings.

export default SearchContainer();
