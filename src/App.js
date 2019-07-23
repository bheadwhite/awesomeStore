import React, { useState } from "react"
import "./App.css"
//components
import Products from "./Components/Products"
import Categories from "./Components/Categories"

export default function App() {
	const [categoryId, setCategoryId] = useState(1)
	const [categoryName, setCategoryName] = useState("Robots")
  const [search, setSearch] = useState("")
  
	return (
		<div className='awesomeStore'>
			<div className='aside'>
				<Categories currentCategory={categoryId} setCategoryId={setCategoryId} setCategoryName={setCategoryName} />
			</div>
			<div>
				<input type='text' onChange={e => setSearch(e.target.value)} />
				<h4>{categoryName}</h4>
				<Products categoryId={categoryId} search={search} />
			</div>
		</div>
	)
}
