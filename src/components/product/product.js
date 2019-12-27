import React from 'react'
import './product.scss';
function Product() {
  return (
    <div className="product">
      <div className="product_image">
        <img src="https://github.com/ReactExpert/react-shopping-cart/blob/master/src/static/products/10412368723880252_1.jpg?raw=true" />
      </div>
      <div className="product_name">
        <span>Wine Skul T-Shirt</span>
      </div>
      <div className="product_price">
        <div className="price">
          <small>$</small>
          <b>13</b>
          <span>.25</span>
        </div>
      </div>
      <div className="installment">
        <small>or</small>
        <b>3x</b>
        <span style={{'padding-left':"5px"}}>$ 4.42</span>
      </div>

      <div className="add_to_card">
        <button>Add to Cart</button>
      </div>
    </div>
  )
}
export default Product;