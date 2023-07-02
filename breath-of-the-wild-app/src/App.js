import React, { useState, useEffect } from 'react';
import './App.css';
import NavBar from './components/NavBar';
import Home from './components/Home';
import Monsters from './components/Monsters';

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  const [monsters, setMonsters] = useState([]);

  useEffect(() => {
    fetch('https://botw-compendium.herokuapp.com/api/v3/compendium/category/monsters')
    .then(res => res.json())
    .then(data => {
      console.log(data); // Print data to console
      // If data is an array, directly set it to state
      if (Array.isArray(data)) {
        setMonsters(data);
      }
    });
  
  }, []);

  return (
    <div>
      <Router>
        <NavBar />
        <Switch>
          <Route exact path="/monsters">
            <Monsters data={monsters} />
          </Route>
          <Route exact path="/">
            <Home />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;

