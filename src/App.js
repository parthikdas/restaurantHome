import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import "./App.css";
import Navbar from './components/Navbar';
import Home from './components/Home';
import MenuCard from './components/MenuCard';
import Chef from './components/Chef';
import About from './components/About';

const App = () => {
  return (
    <>
    <Router>
      <Navbar/>
      <div className="App">
        <Switch>
          <Route exact path="/menu">
            <MenuCard/>
          </Route>
          <Route exact path="/chef">
            <Chef/>
          </Route>
          <Route exact path="/about">
            <About />
          </Route>
          <Route exact path="/">
            <Home/>
          </Route>
        </Switch>
      </div>
    </Router>
    </>
  );
}

export default App;
