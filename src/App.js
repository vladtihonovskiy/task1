import React, { Component } from 'react';
import './App.css';
function check() {
	const a = 15;
	console.log(a);
	function checkVariable() {
		console.log(a);

		 const a = 3;
		console.log(a);
	}
	checkVariable();
}

class App extends Component {
	render() {
		check();
		return (
			<div className="App">
				<header className="App-header">
					<a
						className="App-link"
						href="https://reactjs.org"
						target="_blank"
						rel="noopener noreferrer"
					>
            Learn React
					</a>
				</header>
			</div>
		);
	}
}

export default App;
