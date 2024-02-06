import React, { useState } from 'react';
import './App.css';
import Register from './components/Register';
import Fetch from './components/Fetch';

function App() {
  const [showRegister, setShowRegister] = useState(false);

  const handleRegisterClick = () => {
    setShowRegister(true);
  };

  return (
    <>
      {!showRegister ? (
        <Fetch onRegisterClick={handleRegisterClick} />
      ) : (
        <Register />
      )}
    </>
  );
}

export default App;
