import React from 'react';
import './Header.css';
import {popup} from '../Helper/HelperMethods';


const header = (props)=> {
	return (
		<div className="Header">
			<div className="App-header-logo">
				<a href="#" className="logo-img" title="Ihome Iran"></a>
				<nav className="right">
			        <ul>
				        <li className="left m0">
				        	<a onClick={(props) => popup(props)} href="#" className="button">Login</a>
				        </li>
			        </ul>
	        	</nav>
	        </div>
        </div>
    )
};


export default header;