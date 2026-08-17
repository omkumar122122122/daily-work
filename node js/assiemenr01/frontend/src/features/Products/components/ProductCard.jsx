import React from 'react'

import './ProductCard.css'

function ProductCard({product}) {

   
  return (
    <div className="main">

      <div className="image">
        <img src={product.image} alt={product.name} />
      </div>

      <div className="content">
        <h3>{product.name}</h3>

        <p className="category">{product.category}</p>

        <p>{product.description}</p>

        <div className="bottom">
          <span className="price">₹{product.price}</span>
          <span className="rating">{product.rating}</span>
        </div>
      </div>

    </div>
  )
}

export default ProductCard