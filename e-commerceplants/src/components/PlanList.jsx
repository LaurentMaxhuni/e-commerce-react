import React from "react";

const plans = [
  {
    id: 1,
    name: "Basic Plan",
    price: "9.99",
  },
  {
    id: 2,
    name: "Pro Plan",
    price: "19.99",
  },
  {
    id: 3,
    name: "Enterprise Plan",
    price: "29.99",
  },
];

function PlanList() {
  return (
    <div>
      <h2>Available Plans</h2>
      <ul>
        {plans.map((plan) => (
          <li style={{ listStyle: "none" }} key={plan.id}>
            {plan.name} - ${plan.price}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default PlanList;
