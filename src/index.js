import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';




//ReactDOM.render(<App />, document.getElementById('root'));


const world = 'world';
const string = <h1>Hello, {world}</h1>;


//ReactDOM.render(string, document.getElementById('root'));


function formatName(firstName, lastName) {
	return firstName + ' ' + lastName;
}


// const element = (
// 	<h1>
// 		Hello, { formatName("Vlad", "Tihonoskiy") }!
// 	</h1>
// );


//ReactDOM.render(element, document.getElementById('root'));



// const element = (
// 	<div>
// 		<h1>Hello!</h1>
// 		<h2>Good to see you here.</h2>
// 	</div>
// );
//
//
// ReactDOM.render(element, document.getElementById('root'));


//
// function Welcome(props) {
// 	return <h1>Hello, {props.name}</h1>;
// }
//
// ReactDOM.render(Welcome({name:"vlad"}), document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
