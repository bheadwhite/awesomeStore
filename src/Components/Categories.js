import React from "react"
import { categories as CATEGORIES } from "./../data"

export default function Categories(props) {
	const { id, setCategory } = props
	let categories = CATEGORIES.map(c => {
		let active = c.id === id ? ' active': ''
		return (
			<div key={c.id} className={`category pt${active}`} onClick={() => setCategory(c)}>
				{c.name}
			</div>
		)
	})

	return (
		<div>
			<h4>ALL CATEGORIES</h4>
			{categories}
		</div>
	)
}
