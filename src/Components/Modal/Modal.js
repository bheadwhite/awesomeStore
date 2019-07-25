import React from "react"
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faTimes} from '@fortawesome/free-solid-svg-icons'
import './Modal.css'

export default function Modal({ product, setDisplayModal }) {
	return product ? (<div className='modal'>
				<div className='modal_wrapper'>
					<div className='close'>
						<span className='pt' onClick={()=>setDisplayModal(false)}>
              <FontAwesomeIcon icon={faTimes} className="fa-icon" />
            </span>
					</div>
					<div className='product_detail flex'>
						<div className="left">
							<img src={product.images.large} alt={product.name} />
						</div>
						<div className="right">
							<div className='product_title'>{product.name}</div>
							<div className='product_price'>${product.price}</div>
							<div className='desc_text'>{product.description}</div>
						</div>
					</div>
				</div>
			</div>
  ): null
}
