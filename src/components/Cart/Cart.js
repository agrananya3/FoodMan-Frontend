import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { cartActions } from "../../Store/Cart-slice";
import "./Cart.css";
import CartItem from "./CartItem";


const Cart = () => {
  const cartItems = useSelector(state => state.cart.items);
  const totalAmount = useSelector(state => state.cart.totalAmount);
  const totalQuantity = useSelector(state => state.cart.totalQuantity);

  const dispatch = useDispatch();

  const clearcartHandler=()=>{
    dispatch(cartActions.clearbag());
  }

  return (
    <div>
      <div className="cart-header">
        <h3>
          Bag
          <span className="cart-count">{totalQuantity}</span>
        </h3>
        <div className="clear-cart" onClick={clearcartHandler} >
          Clear Bag
        </div>
      </div>
      <div className="cart-body">
        {cartItems.map((item) => (
          <CartItem
            key={item.id}
            name={item.name}
            quantity= {item.quantity}
            price={item.price}
            discount={item.discount}
            id={item.id}
            hotel_name={item.hotel_name}

          />
        ))}
      </div>
      <div className="cart-footer">
        <div className="cart-total">
          <span>Sub Total</span>
          <span>₹{totalAmount}</span>
        </div>
        <div className="check-btn">
          <div className="checkout">Proceed To Checkout</div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
