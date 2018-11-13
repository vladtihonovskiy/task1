import React, { Component } from "react";
import { array, func } from "prop-types";

import "../MainListPage/MainListPage.css";


class SingleItem extends Component {
	static propTypes = {
		list: array,
		onChangeListItem: func
	}

	state = {
		color: "",
		text: "",
	}

	componentDidMount() {
		debugger;
		if (this.props.list[0]) {
			this.setState({
				color: this.props.list[0].color,
				text: this.props.list[0].text
			});
		}
	}

	onTextInputChange = (event) => {
		this.setState({
			text: event.target.value
		}, () => {
			this.onChangeBtnClick();
		});
	}

	onColorInputChange = (event) => {
		this.setState({
			color: event.target.value
		}, () => {
			this.onChangeBtnClick();
		});
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
			</div>
		);
	}

	onChangeBtnClick = () => {
		this.props.onChangeListItem(this.props.match.params.id, {
			text: this.state.text,
			color: this.state.color
		});
	}


	render() {
		const { list } = this.props;
		if (list[0]) {
			return (
				<div>
					<div className={"controllersWrapper"}>
						<div>
							<input value={this.state.text} onChange={this.onTextInputChange} type="text" />
							<input value={this.state.color} onChange={this.onColorInputChange} type="color" />

							<button onClick={this.onChangeBtnClick}>Change</button>
						</div>
					</div>

					<div className={"itemWrapper"}>
						{list.map((item) => {
							return this.renderItem(item);
						})}
					</div>
				</div>
			);
		}
		return (
			<div>
				<h1>Item was delete</h1>
			</div>
		);
	}
}

export default SingleItem;
