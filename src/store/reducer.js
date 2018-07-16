import React from 'react';
import {listingDataOnSubmit} from '../ListingData';
import {listingData} from '../ListingData';
const initialState = {
	listings:null
}

export const reducer = (state = initialState, action)=>{
	console.log("REDUCER : FIRED");
	if(action.type  == 'SEARCH'){
		console.log("REDUCER : SUBMIT SEARCH");

		let currentState = {...state};
		currentState['listings'] = listingDataOnSubmit();
		console.log(currentState);
		return {
			listings: currentState
		}
	}
	if(action.type  == 'ONLOAD'){
		console.log("REDUCER : ON LOAD");

		let currentState = {...state};
		currentState['listings'] = listingData();
		console.log(currentState);
		return {
			listings: currentState
		}
	}
	return state;
}
