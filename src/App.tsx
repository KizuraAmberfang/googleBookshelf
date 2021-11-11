import React, {useState} from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import './custom.scss';

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Main from './Pages/Main';
import Book from './Pages/Book';

function App() {

	const [inputValue, setInputValue] = useState("");
	const [row, setRow] = useState(10);
	const [currentPage, setCurrentPage] = useState(1);

  	return (
    	<div className="App">
			<Router>
				<Routes>
				<Route path='/' element={<Main inputValue={inputValue} setInputValue={setInputValue} row={row} setRow={setRow} currentPage={currentPage} setCurrentPage={setCurrentPage}/>} />
				<Route path='/book' element={<Book />} />
				</Routes>
			</Router>
      	</div>
  );
}

export default App;
