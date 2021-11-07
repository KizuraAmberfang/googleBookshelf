import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Main from './Pages/Main';
import Book from './Pages/Book';

function App() {

  	return (
    	<div className="App">
			<Router>
				<Routes>
				<Route path='/' element={<Main />} />
				<Route path='/book' element={<Book />} />
				</Routes>
			</Router>
		{/* </>
	    <Router>
      		<div>
				<Link to="/">Main</Link>
			</div>
			<div>
				<Link to="/book">Book</Link>
			</div>
		<hr />
		<Switch>
			<Route exact path="/">
				<Main />
			</Route>
			<Route path="/blogs">
				<Book />
			</Route>
		</Switch>
		</Router> */}
      	</div>
  );
}

export default App;
