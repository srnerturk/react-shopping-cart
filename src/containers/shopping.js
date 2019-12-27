import React from 'react';
import "./shopping.scss";
import SizeFilter from '../components/sizeFilter/sizeFilter';
import Product from '../components/product/product';
function Shopping() {
  return (
    <div className="shopping">
      <SizeFilter />
      <Product />
    </div>
  )
}
export default Shopping