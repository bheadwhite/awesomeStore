import React from "react"

export default function Modal({ product, setDisplayModal }) {
	return product ? (<div className='modal'>
				<div className='modal_wrapper'>
					<div className='close'>
						<span className='pt' onClick={()=>setDisplayModal(false)}>X</span>
					</div>
					<div className='product_detail flex'>
						<div>
							<img src={product.images.large} alt={product.name} />
						</div>
						<div>
							<div className='product_title'>{product.name}</div>
							<div className='product_price'>${product.price}</div>
							<div className='desc_title'>{product.description}</div>
						</div>
					</div>
				</div>
			</div>
  ): null
}
