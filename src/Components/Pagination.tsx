import { useState, FC, ReactElement } from "react";
import Rows from "./Row";
// data: i dati che dobbiamo paginare
// RenderComponent: il componenente usato per renderizzare, in questo caso Row
// title: il titolo della pagina
// pageLimit: numero di pagine massimo nella paginazione (faremo 5)
// dataLimit: il numero di elementi (5, 10, 15, 20)

// mancano da mettere dei limitatori!

type ChildProps = {
  data: any[];
  title: string;
  pageLimit: number;
  dataLimit: number;
};

const Pagination: FC<ChildProps> = ({
  data,
  title,
  pageLimit,
  dataLimit
}): ReactElement => {
  console.log(data.length);
  const [pages] = useState(Math.ceil(data.length / dataLimit));
  const [currentPage, setCurrentPage] = useState(1);

  function goToNextPage() {
    if (currentPage < pages) setCurrentPage((page) => page + 1);
  }

  function goToPreviousPage() {
    if (currentPage > 1) setCurrentPage((page) => page - 1);
  }

  function changePage(event: any) {
    const pageNumber = Number(event.target.textContent);
    setCurrentPage(pageNumber);
  }

  // restituisce i dati che pagineremo
  const getPaginatedData = () => {
    const startIndex = currentPage * dataLimit - dataLimit;
    const endIndex = startIndex + dataLimit;
    return data.slice(startIndex, endIndex);
  };

  const getPaginationGroup = () => {
    let start = Math.floor((currentPage - 1) / pageLimit) * pageLimit;
    return new Array(pageLimit).fill(1).map((_, idx) => start + idx + 1);
  };

  return (
    <div>
      <h1>{title}</h1>
      <div>
        {getPaginatedData().map((d: any, idx: any) => (
          <Rows key={idx} data={d} />
        ))}
      </div>
      <ul className="pagination justify-content-center">
        <li className="page-item" onClick={goToPreviousPage}>
          <a className="page-link">Previous</a>
        </li>
        {getPaginationGroup().map((item, index) => (
          <li className="page-item" onClick={changePage}>
            <a className="page-link">{item}</a>
          </li>
        ))}
        <li className="page-item" onClick={goToNextPage}>
          <a className="page-link">Next</a>
        </li>
      </ul>
    </div>
  );
};

export default Pagination;
