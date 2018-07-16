import React, { Component } from 'react'
import './ListingCard.css'
import {listingData} from '../../ListingData'

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
		console.log("Listing Card Render");
		// console.log(this.props.listings.data.response);

		let listItems = null;
		listItems = (
			<div>
				{this.props.listings.data.response.list_item.map((list, index) => {
					return (
						<div className = "listingCard" key={index}>
							<div className="listingImage"><img className="listingCardImage" src={list.images_list[0].cdn_path}/></div>
							<div className="listinginfo">
								<span className="listingTitle"><h2>{list.title.fa}</h2></span>
								<span className="listingId">{list.property_id}</span>
								<span className="listingDesc">{list.description.fa}</span>
							</div>
						</div>);
				})}
			</div>
		);


		return (
			<div>{listItems}</div>
		);
	}
}

export default ListingCard;