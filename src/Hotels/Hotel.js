import React from "react";
import { hotelActions } from "../Store/hotel-slice";
import { useDispatch, useSelector } from "react-redux";
import styles from "./Hotel.module.css";

const Hotel = (props) => {
  const hotel_id = useSelector((state) => state.hotel.hotel_id);
  const dispatch = useDispatch();
  const changeHotel = (event) => {
    event.preventDefault();
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
        Dishes available: {props.totalDishes}
      </span>
    </li>
  );
};
export default Hotel;
