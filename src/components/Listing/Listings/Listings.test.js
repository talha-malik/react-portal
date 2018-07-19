import React from 'react';

import {configure, shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Listings from './Listings';

configure({adapter: new Adapter()});


describe('<Listings>', ()=>{

	let wrapper = '' ;
	beforeEach(()=>{
		wrapper = shallow(<Listings/>);
	});

	it('<Home/> should render searchbox and Listing Components',()=>{
		expect(wrapper.find('.listingBlock')).toHaveLength(1);
	})
});