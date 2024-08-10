import "./App.css";
import { BrowserRouter as Router, Routes,  Route } from 'react-router-dom';
import React, { Component } from "react";
import NavBar from "./Components/NavBar";
import News from "./News";

export default class App extends Component {
  render() {
    return (
      <div>
        <Router>
        <NavBar/>
        
          <Routes>

          <Route path="/" key="General"><News pageSize={6} country="in" category="general" /></Route>
          <Route path="/bussiness" key="bussiness"><News pageSize={6} country="in" category="bussiness" /></Route>
          <Route path="/entertainment" key="entertainment"><News pageSize={6} country="in" category="entertainment" /></Route>
          <Route path="/health" key="Health"><News pageSize={6} country="in" category="health" /></Route>
          <Route path="/sports" key="Sports"><News pageSize={6} country="in" category="sports" /></Route>
          <Route path="/technology" key="Technology"><News pageSize={6} country="in" category="technology" /></Route>
          </Routes>
                </Router>
      </div>
    );
  }
}
