import React from 'react'

import {configure, shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import {reducer} from './reducer';

import {listingData} from '../ListingData';

configure({adapter: new Adapter()});

describe('Listings state in redux',()=>{
	it('should return the initial state', () => {
        expect(reducer(undefined, {})).toEqual({
           listings:null
        });
    });

    it('should return Listings Acording to Action TYPE', () => {
        expect(reducer({listings:null}, {type: 'ONLOAD'})).toEqual(
			{"listings":{
				"listings":listingData()
           		}
       	   	}
        );
    });
})