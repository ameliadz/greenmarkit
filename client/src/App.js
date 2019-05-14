import React, { Component } from "react";
import "./App.css";
import { Route, Switch } from "react-router-dom";

import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import Vendors from "./components/Vendors/VendorsList";
import Maps from './components/Maps/MapsContainer';




class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/vendors" component={Vendors} />
          <Route exact path="/maps" component={Maps} />
        </Switch>
      </div>
    );
  }
}

export default App;
