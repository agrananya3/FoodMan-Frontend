import React,{Fragment} from "react";

import styles from "./MiddleColumn.module.css";
import hotelstyle from "../Meals/AvailableMeals.module.css";
import Meals from "../Meals/Meals";
import { useSelector } from "react-redux";
import VegOnly from "../UI/VegOnly/VegOnly";
import dummyList from "../Meals/DummyMeals";
import Restaurant from "../../Hotels/Restaurent"

const MiddleColumn = () => {
 
  const hotelName = useSelector((state) => state.hotel.hotel_name);
  const hotelId = useSelector((state) => state.hotel.hotel_id);
  var requiredDishes = dummyList.find(
    (hotel) => hotel.hotel_id === hotelId
  ).dishes;
  return (
    <Fragment>
      <div className={hotelstyle["hotel"]}>
        <h3>
          {hotelName}
          <span className={hotelstyle["cart-count"]}>{requiredDishes.length}</span>
        </h3>
        <div className={styles["vegonly-wrapper"]}>
          <VegOnly />
          <span className={styles["veg-heading"]}>
            <p>Veg Only</p>
          </span>
        </div>
        

      </div>


      <div className={styles.middle}>
      <Meals />
    </div>
    <Restaurant  />
    </Fragment>
    
  );
};

export default MiddleColumn;
