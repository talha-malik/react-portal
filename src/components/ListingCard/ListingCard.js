import React, { Component } from 'react'
import './ListingCard.css'
import {listingData} from './ListingData'

class ListingCard extends Component{
	constructor(props){
		super(props);
		this.state = {"listings":""};
	}

	getSearchListings = (event,state) =>{
		event.preventDefault();
		console.log(state);

		fetch('https://feapi.ihome.ir/stage/api6/index.php')
		.then(results => {
			 console.log(results);
		});

		let currentState = {...this.state};
		currentState['listings'] = listingData();


		//console.log(JSON.stringify(currentState.listings));
		this.setState({"listings": JSON.stringify(currentState.listings)} );
		console.log(this.state);
	}

	

	render() {
		return (
			<div className = "listingCard"></div>
			);
	}
}

export default ListingCard;