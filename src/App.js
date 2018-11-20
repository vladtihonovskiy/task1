import React, { Component } from 'react';
import ShopItem from "./components/ShopItem/ShopItem";
import Button from "./components/Button/Button";
import './App.css';

const Items = [
		{ imgUrl: "https://images.ua.prom.st/1256548118_w300_h300_kostyumzh.png", description: "Кофта 11 из 10 ", price: "50$"},
		{ imgUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTKL0FrSdksaHT6Ac254sZ2DvwQOE25_WyVYm2ZFyok2bTHQSEl", description: "Кофта 11 из 10 ", price: "145$"},
		{ imgUrl: "https://images.ua.prom.st/1256548118_w300_h300_kostyumzh.png", description: "Кофта 11 из 10 ", price: "145$"},
		{ imgUrl: "https://images.ua.prom.st/1256548118_w300_h300_kostyumzh.png", description: "Кофта 11 из 10 ", price: "145$"},
		{ imgUrl: "https://images.ua.prom.st/1256548118_w300_h300_kostyumzh.png", description: "Кофта 11 из 10 ", price: "145$"},
		{ imgUrl: "https://images.ua.prom.st/1256548118_w300_h300_kostyumzh.png", description: "Кофта 11 из 10 ", price: "145$"},
		{ imgUrl: "https://images.ua.prom.st/1256548118_w300_h300_kostyumzh.png", description: "Кофта 11 из 10 ", price: "145$"},
	]

function renderShopItems() {
	return(
		<>
			{ Items.map( item => {
				return (<ShopItem imgUrl={item.imgUrl} description={item.description} price={item.price} />);
			})}
		</>
	)
}

class App extends Component {
  render() {

    return (
      <div className="App">
		  <div className="shop_item_wrapper">
			  { renderShopItems() }
		  </div>
      </div>
    );
  }
}

export default App;
