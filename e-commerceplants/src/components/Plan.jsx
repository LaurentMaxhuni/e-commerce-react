import React from "react";

function Plan({ name, price, desc }) {
  return (
    <>
      <div className="plan">
        <h2>{name}</h2>
        <p>{desc}</p>
        <p>Price: {price}$</p>
      </div>
    </>
  );
}

export default Plan;
