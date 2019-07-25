import React from "react"
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faSearch} from '@fortawesome/free-solid-svg-icons'
import './Header.css'

export default function header({search, setSearch}) {
	return (
		<div className='header'>
      <div className="wrapper">
        <h1>Amazing Store</h1>
        <div className='center search'>
          <FontAwesomeIcon icon={faSearch} className="fa-icon" />
          <input type='text' value={search} onChange={e => setSearch(e.target.value)} placeholder="Search products by name" />
        </div>
      </div>
		</div>
	)
}
