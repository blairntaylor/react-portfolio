import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Images from "./components/Images";
import Wrapper from "./components/Wrapper.js";

function App() {
  return (
    <Router>
      <div>
      <Header />
      <Navbar />
      <Wrapper>
        <Route exact path="/" component={Images} />
        {/* <Route exact path="/profile" component={Profile} />
        <Route exact path="/portfolio" component={Portfolio} />
        <Route exact path="/contact" component={Contact} /> */}
      </Wrapper>
      <Footer />
      </div>
    <Router/>
  );
}

export default App;
