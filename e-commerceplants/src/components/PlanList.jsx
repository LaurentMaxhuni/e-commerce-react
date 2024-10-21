import React from "react";

const plans = [
  {
    id: 1,
    name: "Basic Plan",
    price: "9.99",
    desc: "Essential features for personal use.",
  },
  {
    id: 2,
    name: "Pro Plan",
    price: "19.99",
    desc: "Advanced features for professional use.",
  },
  {
    id: 3,
    name: "Enterprise Plan",
    price: "29.99",
    desc: "Comprehesive solutions for businesses.",
  },
];

function PlanList() {
  return (
    <div>
      <h2>Available Plans</h2>
      {plans.map((plan) => (
        <div
          style={{
            background: "#1b1f25",
            padding: "20px 10px",
            borderRadius: 10,
            marginBottom: 20,
          }}
          key={plan.id}
        >
          <h3>{plan.name}</h3>
          <p>{plan.desc}</p>
          <p>${plan.price}</p>
        </div>
      ))}
    </div>
  );
}

export default PlanList;
