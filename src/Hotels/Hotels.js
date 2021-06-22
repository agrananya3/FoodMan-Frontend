import React from "react";
import Dummy_list from './../components/Meals/DummyMeals'
import Hotel from "./Hotel";
import styles from "./Hotels.module.css";
const Hotels = (props) => {
  return (
    <ul className={styles.hotels}>
      {Dummy_list.map((hotel) => (
        <Hotel
          key={hotel.hotel_id}
          id={hotel.hotel_id}
          name={hotel.hotel_name}
          totalDishes={hotel.dishes.length}
        />
      ))}
    </ul>
  );
};

export default Hotels;
