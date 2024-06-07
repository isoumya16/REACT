// src/App.js
import React, { useState } from 'react';
import Login from './Login';
import Register from './SignUp';
import './App.css';

const App = () => {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <div className="container">
      <h1>Firebase Authentication</h1>
      <div>
        <button className="switch-button" onClick={() => setIsLogin(true)}>Login</button>
        <button className="switch-button" onClick={() => setIsLogin(false)}>Sign Up</button>
      </div>
      {isLogin ? <Login /> : <Register />}
    </div>
  );
};

export default App;
