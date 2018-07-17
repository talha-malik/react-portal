import React from 'react';
import {Switch , Route} from 'react-router-dom';

import App from '../../App';
import ListingView from '../ListingView/ListingView'
import Home from '../ListingView/Home'

export const Routes = ()=> {
	return(
		<Route>
		    <Switch>
		      {/*<Route exact path='/' component={Home}/>*/}
		      <Route path='/view' component={ListingView}/>
		    </Switch>
		</Route>
	);
}

// export default Routes;