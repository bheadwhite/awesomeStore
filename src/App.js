import React, { useState } from "react"
import "./App.css"
//components
import Products from "./Components/Products/Products"
import Categories from "./Components/Categories/Categories"
import Header from "./Components/Header/Header"
import Modal from "./Components/Modal/Modal"

export default function App() {
	const [category, setCategory] = useState({ id: 1, name: "Robots" })
	const [priceFilter, setPriceFilter] = useState()
	const [search, setSearch] = useState("")
	const [displayModal, setDisplayModal] = useState({ show: false, product: {}})

	function handlePriceFilter(value){
		if (value === priceFilter){
			setPriceFilter()
		} else {
			setPriceFilter(value)
		}
	}

	return (
		<div className='awesomeStore'>
			<div className='loadingBar' />
			<Header search={search} setSearch={setSearch} />
			<div className='main'>
				<div className='aside'>
					<Categories id={category.id} setCategory={setCategory} filter={priceFilter} setPriceFilter={handlePriceFilter} />
				</div>
				<div>
					<p className="products_category">{category.name}</p>
					<div className='products_wrapper'>
						<Products categoryId={category.id} search={search} setDisplayModal={setDisplayModal} priceFilter={priceFilter} />
					</div>
				</div>
			</div>
			{displayModal.show && <Modal product={displayModal.product} setDisplayModal={setDisplayModal} />}
		</div>
	)
}
