// Step 2 - Imports and Exports

// App contains CharacterComponent (added below with import CharacterComponent). CharacterComponent contains CharacterCard. CharacterCard contains name and gender (from api) - go back and add more character attributes later.

import React from "react";
import "./App.css";

import CharacterComponent from "./components/CharacterComponent";

  // Step 4 - add props/data content inside functions in created files containing components (App.js and ChracterCard.js)

  // Step 4 - add props/data content inside functions in created files containing components (Card.js, Explanation.js, App.js)

function App() {
  return (
 // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  // Fetch characters from the star wars api in an effect hook. Remember, anytime you have a
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.
  <div className="App">
    <h1 className="Header">React Wars</h1>
  </div>
  );
}

export default App;
