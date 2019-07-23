import React, { useState, useEffect } from "react"
import { products } from "./../data"

export default function Products(props) {
	const [filteredProducts, setFilteredProducts] = useState([])
	const { categoryId, search } = props

	//compDidMnt
	useEffect(() => {
		setFilteredProducts(() => {
			//run category filter
			let filtered = products.filter(p => Number(p.categoryId) === Number(categoryId))
			//if search exists run search filter
			if (search) {
				filtered = filtered.filter(p => p.name.toLowerCase().includes(search))
			}
			//map jsx
			return filtered.map((p, i) => {
				return <div key={`product_${i}`}>{p.name}</div>
			})
		})
	}, [categoryId, search])

	return filteredProducts
}
