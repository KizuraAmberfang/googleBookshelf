import React, {createContext, Dispatch, FC, ReactElement} from "react";
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
	<div className="container-fluid-lg">
		<div>
			<input className="mt-3 block" type="text" value={inputValue} onChange={(e) => {setInputValue(e.target.value); setCurrentPage(1)}} />
		</div>
		<div className="btn-group justify-content-center my-3">
			<button className="btn border disabled">Row</button>
  			<button className={ row === 5 ? "btn border btn-primary" : "btn border"} onClick={() => setRow(5)}>5</button>
  			<button className={ row === 10 ? "btn border btn-primary" : "btn border"} onClick={() => setRow(10)}>10</button>
  			<button className={ row === 15 ? "btn border btn-primary" : "btn border"} onClick={() => setRow(15)}>15</button>
  			<button className={ row === 20 ? "btn border btn-primary" : "btn border"} onClick={() => setRow(20)}>20</button>
		</div>
	</div>
	  <Result input={inputValue} row={row} currentPage={currentPage} setCurrentPage={setCurrentPage}/>
</InputContext.Provider>
	);
};

export default Main;