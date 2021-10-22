import { useState } from 'react'
import logo from './logo.svg'
import './App.css'

function App() {

	interface item {
		id: number;
		name: string;
		price: number;
	}

	interface cartItem extends item {
		quantity: number;
		final_price: number;
	}

	function create_item(id:number,name:string,price:number) {
					return {id,name,price}
	}

//cart and items

	function create_cart_item(item:item, quantity:number) {
					const final_price = item.price * quantity;

					return {...item,quantity,final_price}
	}

	let [cart, set_cart] = useState<Map<number,cartItem>>(new Map())

let apple_juice = create_item(1, 'apple juice', 3.75); 
let bread = create_item(2, 'bread', 2.50);
let dog_food = create_item(3, 'dog food', 12.30);

let items_on_page = [apple_juice, bread, dog_food];

// setting cart total logic

const [total, set_total] = useState(0);

function get_total() {
				set_total(0)	
				cart.forEach((cart_item) => {	
					set_total(total + cart_item.final_price)	
				})
}

// adding items to cart logic
let [quantity, set_quanatity] = useState(2)

function item_choose(chosen:item) {
				const cart_item = create_cart_item(chosen, quantity)
 	cart.set(cart_item.id,cart_item);
	get_total(); 
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
