import React, { useState } from "react";
import PlantInfo from "./PlantInfo.jsx";

function Plant(props) {
  let [counter, setCounter] = useState(0);

  let plants = [];
  for (let i = 0; i < props.plantNumber; i++) {
    let plantNames = ["Dandelion", "Rose", "Sunflower", "Orchid", "Tulip"];
    let randomIndex = Math.floor(Math.random() * plantNames.length);
    let randomPlant = plantNames[randomIndex];
    console.log(randomPlant);
    plants.push(
      <PlantInfo id={i} price={i * 10} color={i} name={randomPlant} />
    );
  }

  return (
    <div
      onClick={() => {
        setCounter(counter + 1);
      }}
    >
      {plants}
      {counter}
    </div>
  );
}

export default Plant;
