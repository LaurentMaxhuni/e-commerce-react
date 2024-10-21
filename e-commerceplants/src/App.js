import React from "react";
import "./App.css";
import PlanSelector from "./components/PlanSelector.jsx";
import PlanList from "./components/PlanList.jsx";

function App() {
  return (

    <div className="App">
      <header className="App-header">
        <h1>Our Subscription Plans</h1>
        <PlanList />
        <PlanSelector />
      </header>
    </div>
  );
}

export default App;