import React from 'react'
import './product.scss';
function Product({ product }) {
  return (
    <div className="product">
      {
        product.isFreeShipping ?
          <div className="free_shipping">
            <span>Free Shipping</span>
          </div> : ""
      }

      <div className="product_image">
        <img src={require(`../../static/products/${product.sku}_2.jpg`).default} />

      </div>
      <div className="product_name">
        <span>{product.title}</span>
      </div>
      <div className="product_price">
        <div className="price">
          <small>{product.currencyFormat}</small>
          <b>{product.price}</b>
        </div>
      </div>
      <div className="installment">
        <small>or</small>
        <b>{product.installments}x</b>
        <span style={{ 'padding-left': "5px" }}>$ {(product.price / product.installments).toFixed(2)}</span>
      </div>

      <div className="add_to_card">
        <button>Add to Cart</button>
      </div>
    </div>
  )
}
export default Product;