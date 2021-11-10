import React, { useState, FC, ReactElement, Dispatch } from "react";
import Rows from "./Row";

type ChildProps = {
  	data: any[];
	query: string;
	nitem: number;
	dataLimit: number;
	currentPage : number;
	setCurrentPage : Dispatch<React.SetStateAction<number>>;
	loader : number;
	setLoader : Dispatch<React.SetStateAction<number>>;
};

var str : string = "";

const Pagination: FC<ChildProps> = ({
  	data,
	query,
	nitem,
	dataLimit,
	currentPage,
	setCurrentPage,
	loader,
	setLoader
}): ReactElement => {
  var pages = (Math.ceil(nitem / dataLimit));

  if (currentPage == 1)
	  str = query;

  const [list, setList] = useState({
    kind: "default",
    totalItems: 0,
    items: []
  });

  const getList = async () => {
	setLoader(0);
    const list = await fetch(str, { method: "GET" }).then((res) => res.json());
	setLoader(1);
    setList(list);
  };
  
  function goToFirstPage() {
    setCurrentPage(1);
    const startIndex = 0;
	str = query + "&startIndex=" + startIndex;
	getList();
}

  function goToLastPage() {
    setCurrentPage(pages);
    const startIndex = pages * dataLimit - dataLimit;
	str = query + "&startIndex=" + startIndex;
	getList();
}

  function goToNextPage() {
    var startIndex = currentPage * dataLimit - dataLimit;
	if (currentPage < pages) 
	{
		setCurrentPage((page) => page + 1);
    	startIndex = startIndex + dataLimit;
	}
	str = query + "&startIndex=" + startIndex;
	getList();
}

  function goToPreviousPage() {
	var startIndex = currentPage * dataLimit - dataLimit;
    if (currentPage > 1) 
	{
		setCurrentPage((page) => page - 1);
    	startIndex = startIndex - dataLimit;
	}
	str = query + "&startIndex=" + startIndex;
	getList();
}

  function changePage(event: any) {
    const pageNumber = Number(event.target.textContent);
    setCurrentPage(pageNumber);
    const startIndex = pageNumber * dataLimit - dataLimit;
	str = query + "&startIndex=" + startIndex;
	getList();
  }

  // restituisce i dati che pagineremo
  const getPaginatedData = () => {
	if (currentPage == 1)
		return (data.slice(0, dataLimit));
	else
	    return (list.items.slice(0, dataLimit));
  };

  const getPaginationGroup = () => {
    let start = currentPage - 3;
	if (start < 1)
		start = 0;
	if (start + 5 > pages)
		start = pages - 5;
	return new Array(5).fill(1).map((_, idx) => start + idx + 1);
  };

  return (
    <div className="position-sticky">
      <ul className="pagination justify-content-center">
	  	<li className="page-item" onClick={goToFirstPage}>
          <a className="page-link">First</a>
        </li>
        <li className="page-item" onClick={goToPreviousPage}>
          <a className="page-link">Previous</a>
        </li>
        {getPaginationGroup().map((item, index) => (
          <li className={ item == currentPage ? "page-item active" : "page-item"} onClick={changePage}>
            <a className="page-link">{item}</a>
          </li>
        ))}
        <li className="page-item" onClick={goToNextPage}>
          <a className="page-link">Next</a>
        </li>
		<li className="page-item" onClick={goToLastPage}>
          <a className="page-link">Last ({pages})</a>
        </li>
      </ul>
      <div>
		  { loader ? <></> : <div className="spinner-grow text-info"></div>}
		{ list.items ? 
		<>
        {getPaginatedData().map((d: any, idx: any) => (
          <Rows key={idx} data={d} />
        ))
		}
		</> : <>Non ci sono elementi visualizzabili</>}
      </div>
    </div>
  );
};

export default Pagination;
