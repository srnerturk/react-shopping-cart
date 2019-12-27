import React from 'react';
import ShoppingCardReducer from '../reducers/shoppingCardReducer';
//Global Store Context
const globalState = {
  sizeFilter: "",
  orderBy: 0
};
export const ShoppingCartContext = React.createContext(globalState);
function ShoppingCartStore({ children }) {
  const [state, dispatch] = React.useReducer(ShoppingCardReducer, globalState);
  const value = { state, dispatch };
  return (
    <ShoppingCartContext.Provider value={value}>
      {children}
    </ShoppingCartContext.Provider>
  )
}
export default ShoppingCartStore;