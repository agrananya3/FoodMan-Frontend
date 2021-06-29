import React from "react";
import { Route, Switch } from "react-router-dom";
import LeftColumn from "./components/Layout/LeftColumn";
import MiddleColumn from "./components/Layout/MiddleColumn";
import RightColumn from "./components/Layout/RightColumn";
import Footer from "./components/Layout/Footer/Footer";
import Navbar from "./components/Layout/Navbar/Navbar";
import Bag from "./components/UI/BagItem/Bag";

import "./App.css";

const App = () => {
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
