import React from "react";
import "./App.css";
import PlanSelector from "./components/PlanSelector.jsx";
import PlanList from "./components/PlanList.jsx";
import CheckoutForm from "./components/CheckoutForm.jsx";

function App() {
  return (

    <div className="App">
      <header className="App-header">
        <h1>Our Subscription Plans</h1>
        <PlanList />
        <PlanSelector />
        <CheckoutForm />
      </header>
    </div>
  );
}

export default App;