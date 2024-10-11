import React, { useState, useEffect } from "react";
import PlantInfo from "./PlantInfo.jsx";

function Plant(props) {
  let [counter, setCounter] = useState(0);
  let [iteration, setIteration] = useState(0);

    useEffect(() => {
        console.log(`Component ${iteration + 1} loaded`);
        if(iteration < props.plantNumber - 1) {
            setIteration(iteration + 1);
        }
    }, [iteration]);

  let plants = [];
  for (let i = 0; i < props.plantNumber; i++) {
    plants.push(<PlantInfo />);
  }

  return <div onClick={() => {
    setCounter(counter + 1);
  }}>{plants}{counter}</div>;
}

export default Plant;
