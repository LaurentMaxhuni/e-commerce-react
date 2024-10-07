import React, { useState, useEffect } from 'react';

function PlanSelector() {

    const [selectedPlan, setSetlectedPlan] = useState("Basic Plan");


    const handlePlanChange = (event) => {
        setSetlectedPlan(event.target.value);
    }

    return(
        <>
            <div>
                <h2>Select a Plan</h2>
                <select value={selectedPlan} onChange={handlePlanChange}>
                    <option value="Basic Plan">Basic Plan</option>
                    <option value="Pro Plan">Pro Plan</option>
                    <option value="Enterprise Plan">Enterprise Plan</option>
                </select>
                <p>You have selected: {selectedPlan}</p>
                {selectedPlan === "Enterprise Plan" && (
                    <p>The Enterprise Plan includes all features and 24/7 support.</p>
                )}
            </div>
        </>
    );
}

export default PlanSelector;