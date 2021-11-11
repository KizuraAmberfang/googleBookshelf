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

  if (currentPage === 1)
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
	if (pageNumber !== currentPage)
	{
    	setCurrentPage(pageNumber);
    	const startIndex = pageNumber * dataLimit - dataLimit;
		str = query + "&startIndex=" + startIndex;
		getList();
	}
  }

  // restituisce i dati che pagineremo
  const getPaginatedData = () => {
	if (currentPage === 1)
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

  const miniGetPaginationGroup = () => {
    let start = currentPage - 2;
	if (start < 1)
		start = 0;
	if (start + 3 > pages)
		start = pages - 3;
	return new Array(3).fill(1).map((_, idx) => start + idx + 1);
  };

  return (
    <div>
      <div className="btn-group d-none d-lg-block justify-content-center my-2">
	  	<button type="button" className="btn border" onClick={goToFirstPage}>First</button>
        <button type="button" className="btn border" onClick={goToPreviousPage}>Previous</button>
        {getPaginationGroup().map((item, index) => (
          <button type="button" className={ item === currentPage ? "btn border btn-primary" : "btn border"} onClick={changePage}>
            {item}
          </button>
        ))}
        <button type="button" className="btn border" onClick={goToNextPage}>
          Next
        </button>
		<button type="button" className="btn border" onClick={goToLastPage}>
          Last ({pages})
        </button>
      </div>
      <div className="btn-group d-block d-lg-none justify-content-center my-2">
	  	{currentPage > 2 ?
	  		<button type="button" className="btn border" onClick={goToFirstPage}>1</button> : <></>
		}
        {miniGetPaginationGroup().map((item, index) => (
          <button type="button" className={ item === currentPage ? "btn border btn-primary" : "btn border"} onClick={changePage}>
            {item}
          </button>
        ))}
		{currentPage < pages - 1 ?
			<button type="button" className="btn border" onClick={goToLastPage}>
        	{pages}
        	</button>
			: <></> }
      </div>
      <div>
		  { loader ? <></> : <div className="spinner-grow text-info my-2"></div>}
		{ list.items ? 
		<>
        {getPaginatedData().map((d: any, idx: any) => (
          <Rows key={idx} data={d} />
        ))
		}
		</> : <div>Non ci sono elementi visualizzabili</div>}
      </div>
    </div>
  );
};

export default Pagination;
