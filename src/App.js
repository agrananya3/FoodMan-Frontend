import React from "react";
import LeftColumn from "./components/Layout/LeftColumn";
import MiddleColumn from "./components/Layout/MiddleColumn";
import RightColumn from "./components/Layout/RightColumn";
import Footer from "./components/Layout/Footer/Footer";
import Navbar from "./components/Layout/Navbar/Navbar";
import CartProvider from "./Store/CartProvider";

import "./App.css";

const App = () => {
  return (
    <CartProvider>
      <Navbar />
      <div className="container">
        <LeftColumn />
        <MiddleColumn />
        <RightColumn />
      </div>
      <Footer />
    </CartProvider>
  );
};

export default App;
