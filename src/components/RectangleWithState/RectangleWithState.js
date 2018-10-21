import React, { Component } from 'react';

import "./RectangleWithState.css";

class Square extends Component {
	state = {
		backgroundColor: "#ffffff",
		text: ""
	}

	onTextInputChange = (event) => {
		this.setState({
			text: event.target.value
		})
	}

	onColorInputChange = (event) => {
		this.setState({
			backgroundColor: event.target.value
		})
	}

	render() {
		const { backgroundColor, text } = this.state;

		return (
			<div className="rectangle-with-state" style={{
				backgroundColor: backgroundColor
			}}>
				<input type="color" onChange={this.onColorInputChange}/>
				<input type="text" onChange={this.onTextInputChange} />
				<p>{ text }</p>
			</div>
		);
	}
}

export default Square;
