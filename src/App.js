import React, { Component } from 'react';
import { connect } from 'react-redux';
import './App.css';
import Header from './components/Header/Header.js';
import SearchBox from './components/SearchBox/SearchBox';
import Listings from './components/Listing/Listings/Listings';

import {Routes} from './components/Router/Routes';

class App extends Component {
  state = {
        counter: 0
    }

  render() {
    console.log('APP JS RENDER',this.props.ctr);
    return (
      <div className="App">
        <Header/>
        <Routes/>
        {/*<span>{this.props.ctr}</span>
        <button onClick={this.props.onIncrementCounter} className=" inc-button">INCREMENT</button>*/}
      </div>
    );
  }
}

const mapStateToProps = state => {
    return {
        ctr: state.counter
    };
};

const mapDispatchToProps = dispatch => {
    return {
        onIncrementCounter: () => dispatch({type: 'INC'})
    };
};

// export default connect(mapStateToProps, mapDispatchToProps)(App);
export default App;
