// Step 2 - Imports and Exports

// App contains CharacterComponent (added below with import CharacterComponent). CharacterComponent contains CharacterCard. CharacterCard contains name and gender (from api) - go back and add more character attributes later.

import React from "react";
import "./App.css";

import CharacterComponent from "./components/CharacterComponent";

import styled from "styled-components";

const HeaderDiv = styled.div`
  font-size: 3rem;
  color: black;
  padding-top: 1%;
  padding-bottom: 1%;
`;

// Step 4 - add props/data content inside functions in created files containing components (App.js and ChracterCard.js)

function App() {
  return (
    <div className="App">
      <HeaderDiv>
        <h2 className="Header">React Wars</h2>
      </HeaderDiv>
      <CharacterComponent />
    </div>
  );
}

export default App;
