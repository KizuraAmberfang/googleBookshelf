import { useState, FC, ReactElement, Dispatch } from "react";
import Rows from "./Row";
// data: i dati che dobbiamo paginare
// RenderComponent: il componenente usato per renderizzare, in questo caso Row
// dataLimit: il numero di elementi (5, 10, 15, 20)

type ChildProps = {
  	data: any[];
	query: string;
	nitem: number;
	dataLimit: number;
	currentPage : number;
	setCurrentPage : Dispatch<React.SetStateAction<number>>;
};

const Pagination: FC<ChildProps> = ({
  	data,
	query,
	nitem,
	dataLimit,
	currentPage,
	setCurrentPage
}): ReactElement => {
  var pages = (Math.ceil(nitem / dataLimit));

  var loader : number = 0;
  var str : string = "";

  const [list, setList] = useState({
    kind: "default",
    totalItems: 0,
    items: []
  });

  const getList = async () => {
	loader = 1;
    const list = await fetch(str, { method: "GET" }).then((res) => res.json());
    setList(list);
  };
  
  function goToFirstPage() {
    if (currentPage < pages) setCurrentPage(1);
    const startIndex = currentPage * dataLimit - dataLimit;
    const endIndex = startIndex + dataLimit;
	str = query + "&maxResults=" + dataLimit + "&startIndex=" + startIndex;
	getList();
}

  function goToLastPage() {
    if (currentPage < pages) setCurrentPage(pages);
    const startIndex = currentPage * dataLimit - dataLimit;
    const endIndex = startIndex + dataLimit;
	str = query + "&maxResults=" + dataLimit + "&startIndex=" + startIndex;
	getList();
}

  function goToNextPage() {
    if (currentPage < pages) setCurrentPage((page) => page + 1);
    const startIndex = currentPage * dataLimit - dataLimit;
    const endIndex = startIndex + dataLimit;
	str = query + "&maxResults=" + dataLimit + "&startIndex=" + startIndex;
	getList();
}

  function goToPreviousPage() {
    if (currentPage > 1) setCurrentPage((page) => page - 1);
    const startIndex = currentPage * dataLimit - dataLimit;
    const endIndex = startIndex + dataLimit;
	str = query + "&maxResults=" + dataLimit + "&startIndex=" + startIndex;
	getList();
}

  function changePage(event: any) {
    const pageNumber = Number(event.target.textContent);
    setCurrentPage(pageNumber);
    const startIndex = currentPage * dataLimit - dataLimit;
    const endIndex = startIndex + dataLimit;
	str = query + "&maxResults=" + dataLimit + "&startIndex=" + startIndex;
	getList();
  }

  // restituisce i dati che pagineremo
  const getPaginatedData = () => {
	if (currentPage == 0)
		return (data.slice(0, dataLimit));
	else
	    return list.items;
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
		  { (loader == 1) ? <div className="spinner-grow text-info"></div> : <></>}
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
