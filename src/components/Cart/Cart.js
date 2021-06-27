import React from "react";
import "./Cart.css";
import CartItem from "./CartItem";
import { useSelector, useDispatch } from "react-redux";
import { cartActions } from "../../Store/cart-slice"
import BagTotal from "../BagTotal";

const Cart = () => {
  const cartItems = useSelector((state) => state.cart.items);
  const totalAmount = useSelector((state) => state.cart.totalAmount);
  const totalQuantity = useSelector((state) => state.cart.totalQuantity);
  const dispatch = useDispatch();
  const clearBagHandler = () => {
    dispatch(cartActions.clearBag());
  };

  return (
    <div>
      <div className="cart-header">
        <h3>
          Bag
          <span className="cart-count">{totalQuantity}</span>
        </h3>
        <div className="clear-cart" onClick={clearBagHandler}>
          Clear Bag
        </div>
      </div>
      <div className="cart-body">
        {cartItems.map((item) => (
          <CartItem
            key={item.id}
            name={item.name}
            quantity={item.quantity}
            price={item.price}
            discount={item.discount}
            id={item.id}
            hotel_name={item.hotel_name}
          />
        ))}
      </div>
      <div className="cart-footer">
     {totalAmount>0 &&<BagTotal />}
     </div>
    </div>
  );
};

export default Cart;
