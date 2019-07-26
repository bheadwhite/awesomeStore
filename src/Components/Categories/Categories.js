import React from "react"
import { categories as CATEGORIES } from "../../data"
import "./Categories.css"

export default function Categories({ id, setCategory, setPriceFilter, filter}) {
	const min = filter === 'min' ? 'active' : ''
	const max = filter === 'max' ? 'active' : ''
	let categories = CATEGORIES.map(c => {
		let active = c.id === id ? " active" : ""
		return (
			<div key={c.id} className={`category pt${active}`} onClick={() => setCategory(c)}>
				{c.name}
			</div>
		)
	})

	return (
		<div>
			<p className='category_title'>ALL CATEGORIES</p>
			{categories}
			<p className='category_title price'>FILTER BY PRICE</p>
			<div className='filterP_container'>
				<div className={`price_filter ${min}`} onClick={()=> setPriceFilter('min')}>
					$ Min
				</div>
				<div className={`price_filter ${max}`} onClick={()=> setPriceFilter('max')}>
					$ Max
				</div>
			</div>
		</div>
	)
}
