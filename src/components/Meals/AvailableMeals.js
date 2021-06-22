import React from "react";
import MealItem from "./MealsItem/MealItem";
import dummyList from "../Meals/DummyMeals";
import { useSelector } from "react-redux";
import './AvailableMeals.css'

const AvailableMeals = (props) => {
  const hotelId = useSelector(state=> state.hotel.hotel_id)
  const hotelName = useSelector(state=> state.hotel.hotel_name)
  const requiredDishes = dummyList.find(hotel=> hotel.hotel_id===hotelId).dishes
  return (
    <React.Fragment>
      <div className="hotel"> 
      <h3>{hotelName}
      <span className="cart-count">{requiredDishes.length}</span>
      </h3>
      
      </div>
      {requiredDishes.map((item) => {
        return <MealItem item={item} key={item.id} />;
      })}
    </React.Fragment>
  );
};

export default AvailableMeals;
