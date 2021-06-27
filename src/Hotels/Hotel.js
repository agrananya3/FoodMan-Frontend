import React from "react";
import { hotelActions } from "../Store/hotel-slice";
import { useDispatch, useSelector } from "react-redux";
import styles from "./Hotel.module.css";
import dummyMeals from "../components/Meals/DummyMeals";

const Hotel = (props) => {
  const hotel_id = useSelector((state) => state.hotel.hotel_id);
  const veg = useSelector((state) => state.vegonly.veg);
  const dispatch = useDispatch();
  var totalDishes = props.totalDishes;
  if (veg) {
    var currentHotel = dummyMeals.find((item) => item.hotel_id === props.id);
    const vegDishesList = currentHotel.dishes.filter(
      (item) => item.veg === true
    );
    totalDishes = vegDishesList.length;
  }

  const changeHotel = (event) => {
    event.preventDefault();
    props.onClick();
    dispatch(
      hotelActions.changeHotel({ id: props.id, hotel_name: props.name })
    );
  };
  return (
    <li className={`${styles.hotel} `}>
      <a
        href=" "
        onClick={changeHotel}
        className={`${props.id === hotel_id ? styles.active : styles.inactive}`}
      >
        {props.name}
      </a>
      <span
        className={`${props.id === hotel_id ? styles.active : styles.inactive}`}
      >
        <br />
        Dishes available: {totalDishes}
      </span>
    </li>
  );
};
export default Hotel;
