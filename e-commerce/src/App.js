import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";

import Navbar from "./components/Navbar";
import ProductList from "./components/ProductList";
import Details from "./components/Details";
import Cart from "./components/Cart";
import NotFound from "./components/NotFound";
import Modal from "./components/Modal";
import Footer from "./components/Footer";

class App extends Component {
  render() {
    return (
      <>
        <Navbar />
        <Switch>
          <Route exact path="/" component={ ProductList }/>
          <Route path="/details" component={ Details }/>
          <Route path="/cart" component={ Cart }/>
          <Route component={ NotFound } />
        </Switch>
        <Modal/>
        <Footer/>
      </>
    );
  }
}

export default App;
