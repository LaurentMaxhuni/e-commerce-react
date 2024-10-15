import React, { useEffect } from 'react';

function PlantInfo(props) {

    useEffect(() => {
        console.log(`Component ${props.id} mounted`);
    }, []);

    return (
        <div>
            <h1>Plant Info</h1>
            <h2>Plant Name: {props.name}</h2>
            <p>Color: {props.color % 2 === 0 ?  "Red" : "Green"}</p>
            <p>Price: {props.price}$</p>
        </div>
    );
}

export default PlantInfo;