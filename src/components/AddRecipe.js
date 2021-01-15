import React from 'react';
import styled from 'styled-components';
import ReactModal from 'react-modal';
import { useModal } from 'react-modal-hook';

function AddRecipe() {

    const [showModal, hideModal] = useModal(() => (
        <ReactModal isOpen>
          <p>Modal content</p>
          <button onClick={hideModal}>Add Recipe</button>
        </ReactModal>
    ));

    return (
        <div style={fixedButton}>
            <AddNewBtn onClick={showModal}>
               <h2 style={btnTextStyle}>+ New Recipe</h2>
            </AddNewBtn>
        </div>
    )
    
}

const fixedButton = {
    display: 'flex',
    justifyContent: 'flex-end'
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

export default AddRecipe;
