import React, { useReducer } from "react";
import CartContext from "./cart-context";

const defaultCartState = { items: [], totalAmount: 0 };
const cartReducer = (state, action) => {
  if (action.type === "ADD") {
    let updatedTotal =
      state.totalAmount + action.item.amount * action.item.price;
    const existingCartItemIndex = state.items.findIndex(
      (item) => item.id === action.item.id
    );
    const existingCartItem = state.items[existingCartItemIndex];
    let updatedItems;
    if (existingCartItem) {
      const updatedItem = {
        ...existingCartItem,
        amount: existingCartItem.amount + action.item.amount,
      };
      updatedItems = [...state.items];
      updatedItems[existingCartItemIndex] = updatedItem;
    } else {
      if (state.items.length === 0) {
        updatedItems = [...state.items].concat(action.item);
      } else {
        const restaurent = state.items[0].restraurant_name;
        if (restaurent === action.item.restraurant_name) {
          updatedItems = [...state.items].concat(action.item);
        } else {
          updatedTotal = updatedTotal - action.item.amount * action.item.price;
          updatedItems = [...state.items];
          console.log("RENDER MODAL");
        }
      }
    }
    return { items: updatedItems, totalAmount: updatedTotal };
  }
  if (action.type === "REMOVE") {
    const existingCartItemIndex = state.items.findIndex(
      (item) => item.id === action.id
    );
    const existingCartItem = state.items[existingCartItemIndex];
    let updatedTotal = state.totalAmount - existingCartItem.price;
    let updatedItems;
    if (existingCartItem.amount === 1) {
      updatedItems = state.items.filter((item) => item.id !== action.id);
    } else {
      const updatedItem = {
        ...existingCartItem,
        amount: existingCartItem.amount - 1,
      };
      updatedItems = [...state.items];
      updatedItems[existingCartItemIndex] = updatedItem;
    }
    // if (updatedTotal < 0) updatedTotal = 0;
    return { items: updatedItems, totalAmount: updatedTotal };
  }
  if (action.type === "CLEAR") {
    return defaultCartState;
  }
  return defaultCartState;
};

// Main component
const CartProvider = (props) => {
  const [cartState, dispatchCartAction] = useReducer(
    cartReducer,
    defaultCartState
  );

  const addItemHandler = (item) => {
    dispatchCartAction({ type: "ADD", item: item });
  };

  const removeItemHandler = (id) => {
    dispatchCartAction({ type: "REMOVE", id: id });
  };
  const clearBagHandler = () => {
    dispatchCartAction({ type: "CLEAR" });
  };
  const cartContext = {
    items: cartState.items,
    totalAmount: cartState.totalAmount,
    addItem: addItemHandler,
    removeItem: removeItemHandler,
    clearBag: clearBagHandler,
  };

  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartProvider;
