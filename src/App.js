import React, { useState } from "react"
import "./App.css"
//components
import Products from "./Components/Products"
import Categories from "./Components/Categories"
import Header from "./Components/Header"

export default function App() {
	const [category, setCategory] = useState({id: 1, name: "Robots"})
	const [search, setSearch] = useState("")

	return (
		<div className='awesomeStore'>
			<div className="loadingBar"/>
			<Header search={search} setSearch={setSearch} />
			<div className='main'>
				<div className='aside'>
					<Categories id={category.id} setCategory={setCategory} />
				</div>
				<div>
					<h2>{category.name}</h2>
					<div className="products_wrapper">
						<Products categoryId={category.id} search={search} />
					</div>
				</div>
			</div>
		</div>
	)
}