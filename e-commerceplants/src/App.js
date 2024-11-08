import React from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import PlanSelector from "./components/PlanSelector.jsx";
import PlanList from "./components/PlanList.jsx";
import CheckoutForm from "./components/CheckoutForm.jsx";
import Home from "./components/Home.jsx";
import NotFound from "./components/NotFound.jsx";
import Owner from "./components/Owner.jsx";
import { PlanProvider } from "./context/PlanContext.jsx";

function App() {
  return (
    <PlanProvider>
      <Router>
        <div className="App">
          <header className="App-header">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/plans" element={<PlanList />} />
              <Route path="/plans/:id" element={<PlanSelector />} />
              <Route path="/checkout" element={<CheckoutForm />} />
              <Route path="/owner" element={<Owner />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </header>
        </div>
      </Router>
    </PlanProvider>
  );
}

// TODO: Learn more about Context API

export default App;
