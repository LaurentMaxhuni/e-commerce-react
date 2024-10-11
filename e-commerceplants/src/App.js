import React, { useState } from "react";
import "./App.css";
import Plan from "./components/Plan.jsx";
import Counter from "./components/Counter.jsx";
import PlanSelector from "./components/PlanSelector.jsx";
import Plant from "./components/Plant.jsx";

function App() {
  return (

    <div className="App">
      <header className="App-header">
        <h1>Our Subscription Plans</h1>
        <Plan
          name="Basic Plan"
          desc="A basic plan with essential features."
          price="9.99"
        />
        <Plan
          name="Pro Plan"
          desc="A professional plan with additional benefits."
          price="19.99"
        />
        <Plan
          name="Enterprise Plan"
          desc="An enterprise plan for large-scale businesses."
          price="29.99"
        />
        <Plan
          name="Free Plan"
          desc="A free plan for all the users that need only basic features."
          price="0.00"
        />
        <PlanSelector />

        <Counter plans={5} />
        
        <Plant plantNumber={3} />
      </header>
    </div>
  );
}

export default App;