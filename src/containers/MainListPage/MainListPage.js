import React, { Component } from "react";
import { array, func } from "prop-types";

import { Link } from "react-router-dom";

import "./MainListPage.css";


class MainListPage extends Component {
	static propTypes = {
		list: array,
		onAddNewListItem: func,
		onDeleteListItem: func
	}

	state = {
		color: "",
		text: "",
	}

	onTextInputChange = (event) => {
		this.setState({
			text: event.target.value
		});
	}

	onColorInputChange = (event) => {
		this.setState({
			color: event.target.value
		});
	}

	onAddBtnClick = () => {
		this.props.onAddNewListItem({
			id: Date.now(),
			text: this.state.text,
			color: this.state.color
		});
	}

	onDeleteBtnClick = (id) => () => {
		this.props.onDeleteListItem(id);
	}

	renderItem = (item) => {
		const { color, id, text } = item;

		return (
			<div
				className="itemContainer"
				key={id} style={{
					backgroundColor: color
				}}
			>
				<p>{ text }</p>

				<div>
					<button onClick={this.onDeleteBtnClick(id)}>Delete</button>
					<Link to={`/ListItem/${id}`}> Change </Link>
				</div>
			</div>
		);
	}


	render() {
		const { list } = this.props;

		return (
			<div>
				<div className={"controllersWrapper"}>
					<div>
						<input onChange={this.onTextInputChange} type="text" />
						<input onChange={this.onColorInputChange} type="color" />

						<button onClick={this.onAddBtnClick}>Add</button>
					</div>
				</div>

				<div className={"itemWrapper"}>
					{ list.map((item) => {
						return this.renderItem(item);
					}) }
				</div>
			</div>
		);
	}
}

export default MainListPage;
