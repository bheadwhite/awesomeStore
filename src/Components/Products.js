import React from "react"
import { products as STORE_ITEMS } from "./../data"

export default function Products({ categoryId, search, setDisplayModal }) {
	return STORE_ITEMS.filter(p => Number(p.categoryId) === Number(categoryId) && p.name.toLowerCase().includes(search)).map((p, i) => {
		return (
			<div key={`product_${i}`} className='product pt' onClick={() => setDisplayModal({ show: true, product: p })}>
				<img src={p.images.medium} alt={p.name} />
				<p>{p.name}</p>
				<p>${p.price}</p>
			</div>
		)
	})
}
