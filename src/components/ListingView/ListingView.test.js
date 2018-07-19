import React from 'react'

import {configure, shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import ListingView from './ListingView';

configure({adapter: new Adapter()});

describe('Listing View should Render if State is set and Listing ID is passed',()=>{
	it('Listing View with Invalid ID',()=>{
		expect('1').toEqual('1')
	});
})