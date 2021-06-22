import React, { Fragment } from "react";

import styles from "./CartItem.module.css";
import AddSubtractButton from "../UI/AddSubtractButton";
import { useDispatch } from "react-redux";
import { cartActions } from "../../Store/Cart-slice";

const CartItem = (props) => {
  const sellingPrice = props.price - (props.discount * props.price) / 100;

  const dispatch = useDispatch();

  const addToCartHandler = ()=>{
    dispatch(cartActions.addItem({
      id: props.id,
      name: props.name,
      price: props.price,
      discount:props.discount,
      hotel_name:props.hotel_name
    }));
  };
  const removeItemHandler=()=>{
    dispatch(cartActions.removeItem(props.id));
  }

  return (
    <Fragment>
      <li className={styles["cart-item"]}>
        <h6>{props.name}</h6>
        <div>
          <p>
            ₹{sellingPrice}
            <span> ₹{props.price}</span>
          </p>
          <AddSubtractButton className={styles["addsubtract-button"]}
          id={props.id}
          onAddItem={addToCartHandler}
          onRemoveItem={removeItemHandler} />
        </div>
      </li>
    </Fragment>
  );
};

export default CartItem;
