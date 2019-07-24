import React from "react"
import { products as STORE_ITEMS } from "./../data"

export default function Products(props) {
	const { categoryId, search } = props

	return STORE_ITEMS.filter(p => Number(p.categoryId) === Number(categoryId) && p.name.toLowerCase().includes(search)).map((p, i) => {
		return (
			<div key={`product_${i}`} className='product pt'>
				<img src={p.images.medium} alt={p.name} />
				<p>{p.name}</p>
				<p>${p.price}</p>
			</div>
		)
	})
}
