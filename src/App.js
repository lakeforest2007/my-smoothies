import React from 'react';
import Smoothies from './components/Smoothies';
import Header from './components/layout/Header';
import { ModalProvider } from "react-modal-hook";
import './App.css';

// change declaration to: const App = () => {}
function App() {

  return (
    <ModalProvider>
      <div className="App">
        <Header />
        <Smoothies />
      </div>
    </ModalProvider>
  );
}

export default App;
