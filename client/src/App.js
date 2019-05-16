import React, { Component } from 'react';
import './App.css';
import { Route, Switch } from 'react-router-dom';

import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Vendors from './components/Vendors/Vendors';
import Maps from './components/Maps/Maps';
import VendorInfoForm from './components/VendorInfoForm/VendorInfoForm';


class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/maps" component={Maps} />
          <Route path="/vendors" component={Vendors} />
          <Route path="/create" render={() => <VendorInfoForm/>} />
        </Switch>
      </div>
    );
  }
}

export default App;
