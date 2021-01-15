import React from 'react';

function Ingredient(props) {
    return (
        <li style={{margin: '6px'}}><b style={{color: '#D94259'}}>{props.ingred.quantity}</b> {' ' + props.ingred.ingredName}</li>
    )
}

export default Ingredient;
