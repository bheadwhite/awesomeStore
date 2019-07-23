import React, { useState, useEffect } from "react"
import { categories } from "./../data"

export default function Categories(props) {
	const { currentCategory, setCategoryId, setCategoryName } = props
	const [storeCategories, setStoreCategories] = useState([])

	useEffect(() => {
		setStoreCategories(() =>
			categories.map(c => (
				<div
					key={c.id}
					onClick={e => {
						setCategoryId(c.id)
						setCategoryName(c.name)
					}}>
					{c.name}
				</div>
			))
		)
	}, [currentCategory, setCategoryName, setCategoryId])

	return <div>{storeCategories}</div>
}
