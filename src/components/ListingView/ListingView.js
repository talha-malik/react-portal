import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import {store} from '../../index';
import './ListingView.css';

class ListingView extends Component{
	state = {
		listings:null
	}

	componentDidMount(){
		console.log("LISTING VIEW COMPONENT MOUNTED");
		let currentState = store.getState();
		console.log(currentState.listings.listings);
		let listings = JSON.parse(currentState.listings.listings);
		this.setState ( {
			listings:listings.data.response.list_item
		}, ()=>{console.log(this.state)});

		
	}
	render(){

		console.log(this.props.match.params.listingid);
		let listItems = null;
		if(typeof this.state.listings === 'object' && this.state.listings !== null ){
		listItems = (
			<div>
				{this.state.listings.map((list, index) => {
					if(list.property_id == this.props.match.params.listingid){
						return (
								<div className = "listingView" key={index}>
									<div className="listingImage"><img className="listingCardImage" src={list.images_list[0].cdn_path}/></div>
									<div className="listinginfo">
										<span className="listingTitle"><h2>{list.title.fa}</h2></span>
										<span className="listingId"><h2>{list.property_id}</h2></span>
										<span className="listingDesc"><h2>{list.description.fa}</h2></span>
									</div>
								</div>
							);
					}
				})}
			</div>
		);
	}

		return (<div>{listItems}</div>);
	}
}


export default ListingView;