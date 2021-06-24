import React from "react";
import { useSelector } from "react-redux";
import MealItem from "./MealsItem/MealItem";
import dummyList from "../Meals/DummyMeals";

const AvailableMeals = (props) => {
  const hotelId = useSelector((state) => state.hotel.hotel_id);
  const veg = useSelector((state) => state.vegonly.veg);

  var requiredDishes = dummyList.find(
    (hotel) => hotel.hotel_id === hotelId
  ).dishes;
  if (veg) {
    requiredDishes = requiredDishes.filter((item) => item.veg === true);
  }

  return (
    <React.Fragment>
      {requiredDishes.length === 0 && (
        <p>Opps!!! No Veg Items In This Restaurent </p>
      )}
      {requiredDishes.map((item) => {
        return <MealItem item={item} key={item.id} />;
      })}
    </React.Fragment>
  );
};

export default AvailableMeals;
