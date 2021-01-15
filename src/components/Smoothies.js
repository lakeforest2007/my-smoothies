import React, { useState, useEffect } from 'react';
import Recipe from './Recipe';
// import AddRecipe from './AddRecipe';
import { useModal } from "react-modal-hook";
import ReactModal from 'react-modal';
import styled from 'styled-components';
import Modal from './Modal';

function Smoothies() {
    // hard-coded data as example
    const [recipes, setRecipes] = useLocalStorage('recipes', [
        {
            name: 'Mango Smoothie', // name field must be unique (act as id)
            ingredients: 
                [{
                    id: 1,
                    quantity: '1 cup',
                    ingredName: 'milk'
                }, {
                    id: 2,
                    quantity: '2',
                    ingredName: 'bananas'
                }, {
                    id: 3,
                    quantity: '3',
                    ingredName: 'mangos'
                }]
        }
    ]);

    // this function deletes a recipe
    function deleteRecipe(name) {
        // console.log(name);
        setRecipes(recipes.filter((recipe) => 
            recipe.name !== name));
    }

    function addEntry(entry) {
        const { name, list } = entry;
        const newRecipe = {
            name,
            ingredients: list
        }
        // console.log(newRecipe);
        setRecipes(recipes => [...recipes, newRecipe]);

        // need to update local storage after adding new recipe
        
    }

    const [showModal, hideModal] = useModal(() => (
        <ReactModal ariaHideApp={false} isOpen>
            <Modal hideModal={hideModal} addEntry={addEntry} />
        </ReactModal>
    ));

    return (
        <div style={{position: 'relative'}}>
            <div style={flexbox}>
                {recipes.map((recipe) => (
                    <Recipe 
                        key={recipe.name} 
                        recipe={recipe} 
                        deleteRecipe={deleteRecipe}
                    />
                ))}
            </div>
            <div style={fixedButton}>
                <AddNewBtn onClick={showModal}>
                    <h2 style={btnTextStyle}>+ New Recipe</h2>
                </AddNewBtn>
            </div>
        </div>
    );
}

export function useLocalStorage(key, initialVal) {
    const [value, setValue] = useState(() => {
      const stickyValue = window.localStorage.getItem(key);
      return stickyValue !== null
        ? JSON.parse(stickyValue)
        : initialVal;
    });

    useEffect(() => {
      window.localStorage.setItem(key, JSON.stringify(value));
    }, [key, value]);
    return [value, setValue];
}

const fixedButton = {
    position: 'absolute',
    left: '80%'
}

const AddNewBtn = styled.button`
    border-radius: 5px;
    margin: 50px;
    border: none;
    padding: 10px 20px;
    background-color: grey;
    &:hover {
        cursor: pointer;
        background-color: #D94259;
    }
`

const btnTextStyle = {
    color: 'white'
}

const flexbox = {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    flexWrap: 'wrap'
}

export default Smoothies;