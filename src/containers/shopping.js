import React from 'react';
import "./shopping.scss";
import SizeFilter from '../components/sizeFilter/sizeFilter';
import Product from '../components/product/product';
import Store, { ShoppingCartContext } from '../store/context';
const apiUrl = "/";
const productsUrl = "getdata";
const initialState = {
  products: []
}
function Shopping() {
  const [state, setstate] = React.useState(initialState)
  React.useEffect(() => {
    fetch(apiUrl + productsUrl).then(function (response) {
      response.json().then(function (json) {
        state.products = json.products;
        setstate({ ...state });
      })
    })
  }, [])
  return (
    <Store>
      <div className="shopping">
        <SizeFilter />
        <div className="products">
          {
            state.products.map((item, index) =>
              <Product key={index} product={item} />
            )
          }
        </div>

      </div>
    </Store>
  )
}


export default Shopping