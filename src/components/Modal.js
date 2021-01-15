import React, { useState } from 'react';
import styled from 'styled-components';
import Ingredient from './Ingredient';
import { useLocalStorage } from './Smoothies';

function Modal(props) {

    const [name, setName] = useState('');
    const [quantity, setQuantity] = useState('');
    const [ingredName, setIngred] = useState('');
    const [list, setList] = useState([]);

    function onChange(e) {
        setName(e.target.value);
    }

    function handleChangeQ(e) {
        setQuantity(e.target.value);
    }

    function handleChangeI(e) {
        setIngred(e.target.value);
    }

    const [ id, setId ] = useLocalStorage('id', 0);

    function handleAdd() {
        setId(id + 1);
        const newList = list.concat({ id, quantity, ingredName });
        console.log(newList);
        setList(newList);
        // reset quantity and ingredient name fields
        setQuantity('');
        setIngred('');
    }

    function handleClick() {
        alert("Recipe saved! Form will be reset.");
        const entry = {name, list};
        props.addEntry(entry);
        // reset name to blank field
        setName('');
        setList([]);
    }

    return (
        <div>
            <Form>
                <Close type='button' onClick={props.hideModal}><p style={{fontSize: '20px'}}>x</p></Close>
                <Input 
                    type="text" 
                    name="name" 
                    placeholder="Smoothie Name" 
                    value={name} 
                    onChange={onChange}/>
                <div>
                    <Input 
                        type="text" 
                        name="quantity"
                        placeholder="Quantity (i.e. 1 cup)"
                        value={quantity}
                        onChange={handleChangeQ}/>
                    <Input 
                        type="text" 
                        name="ingred" 
                        placeholder="Ingredient Name (i.e. milk)" 
                        value={ingredName}
                        onChange={handleChangeI}/>
                    <AddButton type="button" onClick={handleAdd}>
                        Add
                    </AddButton>
                </div>

                <div style={{textAlign: 'center'}}>
                    <h2 style={{margin: '20px 0 10px 0', color: 'gray'}}>{name}</h2>
                    <ul>
                        {list.map((ingred) => (
                            <Ingredient key={ingred.id} ingred={ingred}/>
                        ))}    
                    </ul>
                </div>

                <div>
                    <Button type='button' onClick={handleClick}>Save Recipe</Button>
                </div>
            </Form>
        </div>
    )
}


const Close = styled.button`
    align-self: flex-end;
    margin: 10px;
    border: none;
    border-radius: 5px;
    padding: 5px 10px;
    background-color: white;
    &:hover {
        cursor: pointer;
        color: #D94259;
    }
`

const Input = styled.input`
    margin: 10px;
    padding: 5px 10px;
`

const Form = styled.form`
    display: flex;
    justify-content: left;
    align-items: center;
    flex-direction: column;
`

const AddButton = styled.button`
    margin: 10px;
    border: none;
    border-radius: 5px;
    padding: 5px 10px;
    color: gray;
    &:hover {
        cursor: pointer;
        background-color: gray;
        color: white;
    }
`

const Button = styled.button`
    margin: 20px;
    whiteSpace: nowrap;
    padding: 10px 20px;
    color: #D94259;
    width: 150px;
    height: 50px;
    border-radius: 5px;
    border: 1px solid #D94259;
    background-color: white;
    &:hover {
        cursor: pointer;
        background-color: #D94259;
        color: white;
    }
`

export default Modal;
