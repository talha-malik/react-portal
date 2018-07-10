import React, { Component } from 'react';
import './App.css';
import Header from './components/Header/Header.js';
import SearchBox from './components/SearchBox/SearchBox';
import ListingCard from './components/ListingCard/ListingCard'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header/>
        <SearchBox/>
        <ListingCard/>
      </div>
    );
  }
}

export default App;
