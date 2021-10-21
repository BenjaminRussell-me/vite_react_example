import { useState } from 'react'
import logo from './logo.svg'
import './App.css'

function App() {

	interface item {
		id: number;
		name: string;
		price: number;
		quantity: number;
		final_price: number;
	}
	class Item implements item{
		id: number;
		name: string;
		price: number;
		quantity: number;
		final_price: number;
		constructor(id: number, name: string , price: number, quantity: number) {
    this.id = id;
    this.name = name;
		this.quantity = quantity;
    this.price = price;
		this.final_price = price;
  }
}

//cart and items

let [cart, set_cart] = useState<Array<item>>([])

let apple_juice = new Item(1, 'apple juice', 5.50, 1);
let bread = new Item(2, 'bread', 2.50, 1);
let dog_food = new Item(3, 'dog food', 12.30, 1);

let items_on_page = [apple_juice, bread, dog_food];

// setting cart total logic

const [total, set_total] = useState(0);

function get_total(item:item) {
				set_total(0)	
				cart.forEach((cart_item) => {	
					set_total(total + cart_item.final_price)	
				})
}

// adding items to cart logic
let [quantity, set_quanatity] = useState(2)

function item_choose(chosen:item) {
	chosen.quantity = quantity;
	chosen.final_price = chosen.price * chosen.quantity; 
 	cart.push(chosen);
 	get_total(chosen); 
  console.table(cart)
}


  return (
    <div className="App">
			<div>						
							{items_on_page.map((item) => {
							return (
								<button 
									onClick={() => item_choose(item)}
									key={item.id}>
										{item.name}
								</button>
							)
							})}
			</div>
						<p>{(total).toFixed(2)}</p>
    </div>
  )
}

export default App
