import React from 'react';

function Pill(props) {
    return <li key={props.feature} className='pill'>{props.feature}</li>;
}

export default Pill;