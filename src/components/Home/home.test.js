import React from 'react';

import {configure, shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Home from './home';

configure({adapter: new Adapter()});


describe('<Home>', ()=>{

	let wrapper = '' ;
	beforeEach(()=>{
		wrapper = shallow(<Home/>);
	});

	it('<Home/> should render searchbox and Listing Components',()=>{
		expect(wrapper.find('.Home')).toHaveLength(1);
	})
});