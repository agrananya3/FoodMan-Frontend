import React from "react";
import hotelsList from "../components/Meals/DummyMeals";
import Hotel from "./Hotel";
import styles from "./Hotels.module.css";
const Hotels = (props) => {
  return (
    <ul className={styles.hotels}>
      {hotelsList.map((hotel) => (
        <Hotel
          key={hotel.hotel_id}
          name={hotel.hotel_name}
          totalDishes={hotel.dishes.length}
          id={hotel.hotel_id}
          onClick={props.onClick}
        />
      ))}
    </ul>
  );
};

export default Hotels;
