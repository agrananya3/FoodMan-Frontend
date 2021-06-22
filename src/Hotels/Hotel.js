import React from "react";
import { useDispatch } from "react-redux";
import { hotelchangeActions } from "../Store/hotel-slice";
import styles from "./Hotel.module.css";
const Hotel = (props) => {
  const dispatch = useDispatch();

  const hotelHandler = (event)=>{
    event.preventDefault();
    dispatch(hotelchangeActions.changeHotel({id:props.id,hotelname:props.name}))
  }

  return (
    <li className={styles.hotel}>
      <a href=" " onClick={hotelHandler}>{props.name}</a>
      <span>
        <br />
        Dishes available: {props.totalDishes}
      </span>
    </li>
  );
};
export default Hotel;
