import React, { useState, useEffect } from "react";
import "./App.css";
import NavBar from "./components/NavBar";
import Home from "./components/Home";
import Monsters from "./components/Monsters";
import MonsterStats from "./components/MonsterStats";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import styled from "styled-components";
import backgroundImage from "./images/texture.jpeg";

const AppContainer = styled.div`
  background-image: url(${backgroundImage});
  background-size: contain;
  background-repeat: repeat;
  min-height: 100vh;
`;

function App() {
  const [monsters, setMonsters] = useState([]);

  useEffect(() => {
    fetch("https://botw-compendium.herokuapp.com/api/v3/compendium/category/monsters")
      .then((res) => res.json())
      .then((response) => {
        console.log(response.data);
        if (Array.isArray(response.data)) {
          setMonsters(response.data);
        }
      })
      .catch((error) => {
        console.log("Error fetching monsters:", error);
      });
  }, []);

  return (
    <AppContainer>
      <Router>
        <NavBar />
        <div className="content-container">
          <Switch>
            <Route exact path="/monsters">
              <Monsters data={monsters} />
            </Route>
            <Route path="/monsters/:id">
              <MonsterStats data={monsters} />
            </Route>
            <Route exact path="/">
              <Home />
            </Route>
          </Switch>
        </div>
      </Router>
    </AppContainer>
  );
}

export default App;
