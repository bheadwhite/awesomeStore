import React from "react"
import { products as STORE_ITEMS } from "../../data"
import './Products.css'

export default function Products({ categoryId, search, setDisplayModal, priceFilter }) {
	
	let products = STORE_ITEMS.filter(p => Number(p.categoryId) === Number(categoryId) && p.name.toLowerCase().includes(search))
	if(priceFilter){
		if(priceFilter === 'min'){
			products = products.sort((a,b) => a.price - b.price)
		} else if ( priceFilter === 'max'){
			products = products.sort((a,b) => b.price - a.price)
		}
	}
	return products.map((p, i) => {
		return (
			<div key={`product_${i}`} className='product pt' onClick={() => setDisplayModal({ show: true, product: p })}>
				<img src={p.images.medium} alt={p.name} />
				<p className="name">{p.name}</p>
				<p className="price">${p.price}</p>
			</div>
		)
	})
}
