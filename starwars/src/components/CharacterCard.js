// Step 1 - Create component folder and files after laying out/designing file structure
// App contains CharacterComponent. CharacterComponent contains CharacterCard. CharacterCard contains name and gender (from api) so don't need more imports below - go back and add more character attributes later.

// Step 2 - Imports and Exports

import React from "react";

// Step 4 - add props/data content inside functions in created files containing components (App.js and ChracterCard.js)
// Attributes I want to return initally from api: name and gender
function CharacterCard(props) {
    console.log("props", props);
  //console.log(props.data);
  //console.log("Character card props", props);
  //console.log("Character card name props", props.data);
    console.log("Character card name props", props.data.results);
  //console.log("Character card gender props", props.data.gender);

  return (
    

    // for props.data.name (props from parameter defined in above Card function, data from useState state variable, name is the content you want to grab/display from the api (https://swapi.co/api/people/)
    // for props.data.gender (props from parameter defined in above Card function, data from useState state variable, gender is the content you want to grab/display from the api (https://swapi.co/api/people/)
    <div className="Card">
     <h2>Name: {props.data.name} </h2>
      <h2>Gender: {props.data.gender}</h2>
      <h2>Height: {props.data.height} </h2>
      <h2>Weight: {props.data.mass}</h2> 
    </div>
    ); 

}

export default CharacterCard;