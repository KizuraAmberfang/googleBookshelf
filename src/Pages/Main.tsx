import React, {useState, createContext} from "react";
import Result from "../Components/Result";

const InputContext = createContext("");

function Main () {
	const [inputValue, setInputValue] = useState("");
	const [row, setRow] = useState(20);
	
	return (
	<InputContext.Provider value={inputValue}>
	<nav className="navbar navbar-expand-sm bg-light">
		<input type="text" value={inputValue} onChange={(e) => setInputValue(e.target.value)} />
	</nav>
	{/* <Navbar/> */}
	  <Result input={inputValue} row={5}/>
</InputContext.Provider>
	);
};

export default Main;