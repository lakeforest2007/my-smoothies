import React from 'react';

function Header() {
    return (
        <header style={headerStyle}>
            <h1>My Smoothie Recipes</h1>
        </header>
    )
}

const headerStyle = {
    textAlign: 'center',
    padding: '20px 10px',
    background: 'grey',
    color: 'white'
}

export default Header;
