import React, { Component } from 'react'
import { store } from '../../../index';
import {listingData} from '../../../ListingData';
import ListingCard from '../ListingCard';
import { connect } from 'react-redux';

import '../ListingCard.css';

class Listings extends Component{
	constructor(props){
		super(props);
		console.log("CONSTRUCTOR CALLED");
	}

	state = {
		listings:null
	}

	componentDidMount(){
		console.log("COMPONENT MOUNTED");
		this.props.onLoad();

		/*fetch('https://feapi.ihome.ir/stage/api6/index.php')
		.then(results => {
			 console.log(results);
		});*/
	}

	IsJsonString(str) {
	    try {
	        JSON.parse(str);
	    } catch (e) {
	        return false;
	    }
	    return true;
	}

	render(){
		console.log("RENDER CALLED");
		let listingsState = {...this.props.listingsObj};
		console.log(listingsState);

		if(typeof listingsState.listings === 'string'){
			let listings = JSON.parse(listingsState.listings);
			console.log(listings);
			return (
				<div className = "listingBlock"><ListingCard listings={listings}/></div>
				);	
		}

		return (
			<div className = "listingBlock"></div>
			);
		
	}

}

const mapStateToProps = state => {
	return {
		listingsObj : state.listings
	}
}

const mapDispatchToProps = dispatch => {
    return {
        onLoad: () => dispatch({type: 'ONLOAD'})
    };
}; 

export default connect(mapStateToProps,mapDispatchToProps)(Listings);

// export default Listings;