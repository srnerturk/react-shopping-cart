import React from 'react'
import "./sizeFilter.scss";
const initialState = {
  sizes: [
    "XS", "S", "M", "ML", "L", "XL", "XXL"
  ],
  orders: [
    { id: 0, text: "Select" },
    { id: 1, text: "Lowest to Highest" },
    { id: 2, text: "Highest to Lowest" }
  ],
  selectedOrder: 0,
  selectedSize: ""
}
function SizeFilter() {
  const [state, setstate] = React.useState(initialState)
  return (
    <div className="sizeSection">
      <div className="title">
        <h4>Sizes:</h4>
      </div>
      <div className="sizeFilter">
        {
          state.sizes.map((item, i) =>
            <div onClick={() => changeSelectedSize(item)} key={i} className={state.selectedSize === item ? "size active" : "size"}>
              <span>{item}</span>
            </div>
          )
        }
      </div>

      <div className="title">
        <h4>Order by:</h4>
      </div>
      <div className="order">
        <select>
          {state.orders.map((item, i) =>
            <option vaue={item.id}>{item.text}</option>
          )}
        </select>
      </div>
    </div>

  )
  function changeSelectedSize(item) {
    if (item === state.selectedSize)
      item = "";
    state.selectedSize = item;
    setstate({ ...state });
  }
}
export default SizeFilter;