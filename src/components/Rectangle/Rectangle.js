import React, { Component } from 'react';
import { string } from "prop-types";

import "./Rectangle.css";

class Rectangle extends Component {
	static propTypes = {
		backgroundColor: string,
		text: "string"
	}

	static defaultProps = {
		backgroundColor: "#fffff",
		text: ""
	}


	render() {
		const { backgroundColor, text } = this.props;

		return (
			<div className="rectangle" style={{
				backgroundColor: backgroundColor
			}}>
				<p>{ text }</p>
			</div>
		);
	}
}

export default Rectangle;
