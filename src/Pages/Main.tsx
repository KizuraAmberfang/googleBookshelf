import React, {useState, createContext, Dispatch, FC, ReactElement} from "react";
import Result from "../Components/Result";

const InputContext = createContext("");

type ChildProps = {
	inputValue: string;
	setInputValue : Dispatch<React.SetStateAction<string>>;
	row: number;
	setRow : Dispatch<React.SetStateAction<number>>;
	currentPage : number,
	setCurrentPage : Dispatch<React.SetStateAction<number>>;
  };

const Main: FC<ChildProps> = ({
	inputValue,
	setInputValue,
	row,
	setRow,
	currentPage,
	setCurrentPage
  }): ReactElement => 
{
	return (
	<InputContext.Provider value={inputValue}>
	<div>
		<input className="mt-3" type="text" value={inputValue} onChange={(e) => setInputValue(e.target.value)} />
		<ul className="pagination justify-content-center my-3">
			<li className="page-item disabled"><a className="page-link disabled" href="javascript:;">Righe</a></li>
  			<li className={ row == 5 ? "page-item active" : "page-item"}><a className="page-link" href="javascript:;" onClick={() => setRow(5)}>5</a></li>
  			<li className={ row == 10 ? "page-item active" : "page-item"}><a className="page-link" href="javascript:;" onClick={() => setRow(10)}>10</a></li>
  			<li className={ row == 15 ? "page-item active" : "page-item"}><a className="page-link" href="javascript:;" onClick={() => setRow(15)}>15</a></li>
  			<li className={ row == 20 ? "page-item active" : "page-item"}><a className="page-link" href="javascript:;" onClick={() => setRow(20)}>20</a></li>
		</ul>
	</div>
	  <Result input={inputValue} row={row} currentPage={currentPage} setCurrentPage={setCurrentPage}/>
</InputContext.Provider>
	);
};

export default Main;