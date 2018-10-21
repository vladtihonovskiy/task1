import React, { Component } from 'react';

import Rectangle from "./components/Rectangle/Rectangle";
import RectangleWithState from "./components/RectangleWithState/RectangleWithState";

import './App.css';

class App extends Component {
  render() {
    return (
    	<div>
		  <div className="App">
			  <Rectangle backgroundColor={"red"} text={"Привет"}/>
			  <Rectangle backgroundColor={"yellow"} text={"Мир"}/>

			  <RectangleWithState />
		  </div>

		</div>
    );
  }
}

export default App;
