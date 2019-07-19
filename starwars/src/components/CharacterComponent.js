// Step 1 - Create component folder and files after laying out/designing file structure

// App contains CharacterComponent. CharacterComponent contains CharacterCard (added below with import CharacterCard). CharacterCard contains name and gender (from api) - go back and add more character attributes later.

// Step 2 - Imports and Exports

import React, { useState, useEffect } from "react";

import CharacterCard from "./components/CharacterCard";

import Axios from "axios";

// Step 3 - fetching the data with useState and useEffect inside function

function CharacterComponent() {
    // Add useState() - Define variable as data placeholder inside CardView function
    // useState returns an array 1st element [data] = state variable. 2nd element [setData] = function to update value of state variable
    // Need to give useState an empty string or any value so value isnt undefined (undefined would result in an error)
    const [data, setData] = useState("");
  
    // Add useEffect() - called on mount (when function is first called), takes 2 arguments - callback function and array
    useEffect(() => {
      // axios needs to be inside useEffect to avoid infinite loop. /people will return all the characters in the Star Wars list (from https://swapi.co/documentation#people) 
      Axios.get(
        "https://swapi.co/api/people/"
      )
        // Here you set SetData function to update value of state variable with the api data when api request is successful
        .then(resolved => setData(resolved.data))
  
        // Handles failure
        .catch(error => console.log("uh oh", error));
      // Add empty dependency array to avoid infinite API requests
    }, []);
  
    // Console log handles success to  make sure component mounted but do it outside of useEffect to avoid api rate limit
    console.log("component did mount", data);

  // Step 4 - add props/data content inside functions in created files containing components (App.js and ChracterCard.js)

   // Step 5 - return CardComponent function below using state to add CharacterCard component 

  return (
    // Set props for each component (Card and Explanation) by applying them to state variable defined in UseState const [data]
    // Look at file structure to look at which props to use and where. App contains CardView. CardView contains Card and Explanation (added below with <Card /> and <Explanation />). Card contains title, date, image (from api). Explanation contains explanation (from api).

    <div className="CardView">
      <CharacterCard data={data} />
    </div>
  );
}




export default CharacterComponent;
