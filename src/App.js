import React from "react";
import LeftColumn from "./components/Layout/LeftColumn";
import MiddleColumn from "./components/Layout/MiddleColumn";
import RightColumn from "./components/Layout/RightColumn";
import Footer from "./components/Layout/Footer/Footer";
import Navbar from "./components/Layout/Navbar/Navbar";

import "./App.css";

const App = () => {
  return (
    <React.Fragment>
      <Navbar />
      <div className="container">
        <LeftColumn />
        <MiddleColumn />
        <RightColumn />
      </div>
      <Footer />
    </React.Fragment>
  );
};

export default App;
