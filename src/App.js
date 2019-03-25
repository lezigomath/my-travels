import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

import Mytravel from "./my-travel";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Travels</h1>
        </header>
        <Mytravel
          destination="Chichen Itza"
          country="Mexico"
          image="https://cdn.getyourguide.com/img/tour_img-640404-148.jpg"
          distance='far far away'
        />
        <Mytravel
          destination="San Gemigniano"
          country="Italy"
          image="https://www.mytoursapi.com/api/v1/images/178/slide02.jpg?1523529912&size=tour-hero"
          distance='a little closer'
        />
      </div>
    );
  }
}

export default App;