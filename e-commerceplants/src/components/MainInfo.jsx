import React from 'react';

function MainInfo(props) {
    return <>
        <h3>{props.plan.name}</h3>
        <p>{props.plan.desc}</p>
    </>;
}

export default MainInfo;