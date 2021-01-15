import React from 'react';
import Ingredient from './Ingredient';
import styled from 'styled-components';

function Recipe(props) {
    const { name, ingredients } = props.recipe;

    return (
        <div style={flexItem}>
            <h2 style={{margin: '0 0 10px 0', color: 'gray'}}>{name}</h2>
            <ul>
                {ingredients.map((ingred) => (
                    <Ingredient key={ingred.id} ingred={ingred}/>
                ))}    
            </ul>
            <div style={optionsContainer}>
                <Button onClick={() => (props.deleteRecipe(name))}>Delete</Button>
            </div>
        </div>
    );
}

const optionsContainer = {
    alignSelf: 'flex-end'
}

const Button = styled.button`
    margin: 0 0 0 10px;
    padding: 3px 8px;
    border: solid;
    border-color: #D94259;
    border-radius: 3px;
    border-width: 1px;
    color: #D94259;
    background-color: white;
    &:hover {
        cursor: pointer;
        border-color: #D94259;
        background-color: #D94259;
        color: white;
    }
`

const flexItem = {
    display: 'flex',
    flexDirection: 'column',

    width: '300px',
    
    margin: '50px',
    backgroundColor: 'white',
    padding: '30px',
    boxShadow: '8px 10px 10px 5px #ccc',
    borderRadius: '5px'
}

export default Recipe;
