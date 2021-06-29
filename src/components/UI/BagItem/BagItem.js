import { Fragment } from "react";
import { useDispatch } from "react-redux";
import { cartActions } from "../../../Store/cart-slice";
import AddSubtractButton from "../AddSubtractButton";
import styles from "./BagItem.module.css";

// Image Imports
import veg_img from "../../../assets/contact2.png";

const BagItem = (props) => {
  const dispatch = useDispatch();
  const addCartItemHandler = () => {
    dispatch(
      cartActions.addItem({
        id: props.id,
        name: props.name,
        price: props.price,
        discount: props.discount,
        hotel_name: props.hotel_name,
      })
    );
  };
  const removeCartItemHandler = () => {
    dispatch(cartActions.removeItem(props.id));
  };

  const sellingPrice = Math.ceil(
    props.price - (props.discount * props.price) / 100
  );
  return (
    <Fragment>
      <li className={styles["bag-item"]}>
        <div className={styles["img-wrapper"]}>
          <img src={veg_img} alt="meal-img" />
        </div>
        <div className={styles["content-wrapper"]}>
          <h6>{props.name}</h6>
          <div>
            <p>
              ₹{sellingPrice}
              <span> ₹{props.price}</span>
            </p>
            <AddSubtractButton
              className={styles["addsubtract-button"]}
              id={props.id}
              onAddItem={addCartItemHandler}
              onRemoveItem={removeCartItemHandler}
            />
          </div>
        </div>
      </li>
    </Fragment>
  );
};

export default BagItem;
