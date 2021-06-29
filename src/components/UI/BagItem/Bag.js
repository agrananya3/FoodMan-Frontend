import React, { Fragment } from "react";
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { cartActions } from "../../../Store/cart-slice";
import BagItem from "./BagItem";
import BagTotal from "../../BagTotal";
import styles from "./Bag.module.css";

// Image Imports
import cartEmpty_img from "../../../assets/cart-empty.svg";

const Bag = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const bagItems = useSelector((state) => state.cart.items);
  const totalQuantity = useSelector((state) => state.cart.totalQuantity);
  const totalAmount = useSelector((state) => state.cart.totalAmount);

  const clearBagHandler = () => {
    dispatch(cartActions.clearBag());
  };
  const takeToHomePage = () => {
    history.push("/");
  };

  return (
    <Fragment>
      {totalQuantity === 0 ? (
        <div className={styles["empty-bag"]}>
          <div>
            <img src={cartEmpty_img} alt="cart is empty" />
            <h4>Your bag is empty</h4>
            <p>Looks like you haven’t made your choice yet</p>
            <button onClick={takeToHomePage}>Back to homepage</button>
          </div>
        </div>
      ) : (
        <div className={styles.bagitem}>
          {totalQuantity > 0 && (
            <div className={styles["bag-header"]}>
              <h3>
                Bag
                <span className={styles["bag-count"]}>{totalQuantity}</span>
              </h3>
              <div className={styles["clear-bag"]} onClick={clearBagHandler}>
                Clear Bag
              </div>
            </div>
          )}
          <div className={styles["bag-body"]}>
            {bagItems.map((item) => (
              <BagItem
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
          <div className={styles["bag-footer"]}>
            {totalAmount > 0 && <BagTotal />}
          </div>
        </div>
      )}
    </Fragment>
  );
};

export default Bag;
