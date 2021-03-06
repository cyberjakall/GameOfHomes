import React, { Component } from 'react';
import SearchBar from "./SearchBar"
import ResultsTable from "./ResultsTable"
import logo from './logo.svg';
import './App.css';

class App extends Component {
	constructor(props) {
		super(props)
	}
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <div>
      		<SearchBar />
      	</div>
      	<div id='results'>
      	</div>
      </div>
    );
  }
}

export default App;