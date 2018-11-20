import React from 'react';
import Button from "../Button/Button";
import "./ShopItem.css";

function ShopItem(props) {
	return (
		<div className="item_wrapper">
			<img src={props.imgUrl} alt=""/>
			<div className="item_text_wrapper">
				<div className="description">{props.description}</div>
				<div className="price">{props.price}</div>
			</div>

			<Button text={"Заказать"} />
		</div>
	);
}

export default ShopItem;
