import React from "react"
import { categories as CATEGORIES } from "../../data"
import './Categories.css'

export default function Categories({ id, setCategory }) {
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
			<p className="category_title">ALL CATEGORIES</p>
			{categories}
		</div>
	)
}
