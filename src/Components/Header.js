import React from "react"

export default function header({search, setSearch}) {
	return (
		<div className='header'>
      <div className="wrapper">
        <h1>Amazing Store</h1>
        <div className='center'>
          <input type='text' value={search} onChange={e => setSearch(e.target.value)} placeholder="Search products by name" />
        </div>
      </div>
		</div>
	)
}
