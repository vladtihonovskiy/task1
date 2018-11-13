
import React, { Component, Fragment } from 'react';

import { Route, Switch, withRouter } from "react-router-dom";

import MainListPage from "./containers/MainListPage/MainListPage";
import SingleItem from "./containers/SingleItem/SingleItem";


class App extends Component {
	state = {
		list: []
	}

	componentDidMount() {
		this.setState({
			list: JSON.parse(localStorage.getItem('list')) || []
		});
	}

	componentDidUpdate() {
		localStorage.setItem('list', JSON.stringify(this.state.list));
	}

	onAddNewListItem = (value) => {
		//const listState = this.state.list;

		// listState.push(["45,321"]);
		//
		// this.setState({
		// 	list: listState
		// });

		this.setState({
			list: [...this.state.list, value]
		});
	}


	onDeleteListItem = (id) => {
		const remainder = this.state.list.filter((todo) => {
			if (todo.id !== id) { return todo; }
		});

		this.setState({ list: remainder });
	}

	onChangeListItem = (id, value) => {
		const changeItem = this.state.list.filter((todo) => {
			if (todo.id === parseInt(id)) {
				todo.color = value.color;
				todo.text = value.text;
				return todo;
			}
			return todo;
		});

		this.setState({
			list: changeItem
		});
	}

	// findUrlElement = () => {
	// 	const { list } = this.props;
	//
	// 	return[list[list.findIndex((item) => {
	// 		if (item.id = props.match.params.id) {
	// 			return true;
	// 		}
	// 	})]]
	// }


	render() {
		const { list } = this.state;

		return (
			<Fragment>
				<Switch>
					<Route
						exact path={"/"} render={
							() => <MainListPage onAddNewListItem={this.onAddNewListItem} onDeleteListItem={this.onDeleteListItem} list={list} />
						}
					/>
					<Route
						path={"/ListItem/:id"} render={
							(props) => (<SingleItem
								list={[list[list.findIndex((item) => {
									return item.id == props.match.params.id;
								})]]}
								onChangeListItem={this.onChangeListItem}
								{...props}
							            />)
						}
					/>
				</Switch>

			</Fragment>
		);
	}
}

export default withRouter(App);
