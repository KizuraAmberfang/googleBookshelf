import React from 'react';
import {useState, createContext} from "react";
import './App.css';
import Result from './Components/Result'
import 'bootstrap/dist/css/bootstrap.css';

const InputContext = createContext("");

function App() {

	const [inputValue, setInputValue] = useState("");
	const [row, setRow] = useState(20);

  	return (
    	<div className="App">
			<InputContext.Provider value={inputValue}>
			<nav className="navbar navbar-expand-sm bg-light">
				<input type="text" value={inputValue} onChange={(e) => setInputValue(e.target.value)} />
            </nav>
	        	{/* <Navbar/> */}
    	      	<Result input={inputValue}/>
			</InputContext.Provider>
      	</div>
  );
}

export default App;
