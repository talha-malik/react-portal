import React, { Component } from 'react';
import { connect } from 'react-redux';

import SearchBox from '../SearchBox/SearchBox';
import Listings from '../Listing/Listings/Listings';

class Home extends Component{
	render() {
	    return (
	      <div className="App">
	        <SearchBox/>
	        <Listings/>
	        {/*<span>{this.props.ctr}</span>
	        <button onClick={this.props.onIncrementCounter} className=" inc-button">INCREMENT</button>*/}
	      </div>
	    );
  }
}

export default Home;