import React from 'react';
import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar'
import Result from './Components/Result'
import 'bootstrap/dist/css/bootstrap.css';

function App() {
  return (
      <div className="App">
          <Navbar />
          <Result />
      </div>
  );
}

export default App;
