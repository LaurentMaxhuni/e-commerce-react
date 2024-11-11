import React, { useState, useEffect } from "react";

function usePlanData() {
  const [plans, setPlans] = useState([]);

  useEffect(() => {
    const fetchPlans = [
      {
        id: 1,
        name: "Basic Plan",
        price: "9.99",
        desc: "Essential features for personal use.",
        numberOfUsers: 1,
        features: ["Feature 1", "Feature 2", "Feature 3"],
      },
      {
        id: 2,
        name: "Pro Plan",
        price: "19.99",
        desc: "Advanced features for professional use.",
        numberOfUsers: 1,
        features: ["Feature 1", "Feature 2", "Feature 3"],
      },
      {
        id: 3,
        name: "Enterprise Plan",
        price: "29.99",
        desc: "Comprehesive solutions for businesses.",
        numberOfUsers: 10,
        features: ["Feature 1", "Feature 2", "Feature 3"],
      },
    ];
    setPlans(fetchPlans);
  }, []);

  return plans;
}

export default usePlanData;
