import React, { useEffect } from "react";
import { Route, Switch } from "react-router-dom";
import LeftColumn from "./components/Layout/LeftColumn";
import MiddleColumn from "./components/Layout/MiddleColumn";
import RightColumn from "./components/Layout/RightColumn";
import Footer from "./components/Layout/Footer/Footer";
import Navbar from "./components/Layout/Navbar/Navbar";
import Bag from "./components/UI/BagItem/Bag";
import { sendCartData,fetchCartData } from './Store/cart-actions';

import "./App.css";
import { useDispatch, useSelector } from "react-redux";

let isInitial = true;

const App = () => {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);

  useEffect(() => {
    dispatch(fetchCartData());
  }, [dispatch]);

  useEffect(() => {
    if (isInitial) {
      isInitial = false;
      return;
    }
    if(cart.changed){
      dispatch(sendCartData(cart));
    }
     
  }, [cart, dispatch]);

  return (
    <React.Fragment>
      <Navbar />
      <Switch />
      <Route path="/" exact>
        <div className="container">
          <LeftColumn />
          <MiddleColumn />
          <RightColumn />
        </div>
        <Footer />
      </Route>
      <Route path="/bag" exact>
        <Bag />
      </Route>
      <Route path="/orders">
        <h1>Hello From Account</h1>
      </Route>
    </React.Fragment>
  );
};

export default App;
