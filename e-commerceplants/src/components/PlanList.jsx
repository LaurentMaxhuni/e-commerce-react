import React, { memo } from "react";
import usePlanData from "../hooks/usePlanData.jsx";
import Pill from "./Pill.jsx";
import MainInfo from "./MainInfo.jsx";
import withLogging from "../hocs/withLogging.jsx";

const PlanList = memo(function PlanList() {
  const plans = usePlanData();
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
          <MainInfo plan={plan} />
          <p>${plan.price}</p>
          <p>Number of users: {plan.numberOfUsers}</p>
          <hr />
          <ul style={{ textAlign: "center", display: "grid", placeItems: "center", listStyleType: "none", padding: 0 }}>
            <h2 style={{ color: "yellow", fontSize: 50 }}>Features:</h2>
            {plan.features.map((feature) => (
              <Pill feature={feature} key={feature} />
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
})
PlanList.name = "PlanList";

export default withLogging(PlanList);
