import React from 'react'
import "./sizeFilter.scss";
const initialState = {
  sizes: [
    "XS", "S", "M", "ML", "L", "XL", "XXL"
  ],
  selectedSize: ""
}
function SizeFilter() {
  const [state, setstate] = React.useState(initialState)
  return (
    <div className="sizeFilter">
      {
        state.sizes.map((item, i) =>
          <div onClick={() => changeSelectedSize(item)} key={i} className={state.selectedSize === item ? "size active" : "size"}>
            <span>{item}</span>
          </div>
        )
      }
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