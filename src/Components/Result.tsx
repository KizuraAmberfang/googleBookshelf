import { useState, useEffect, FC, ReactElement, Dispatch } from "react";
import Pagination from "./Pagination";

type ChildProps = {
	input: string;
	row: number;
	currentPage : number;
	setCurrentPage : Dispatch<React.SetStateAction<number>>;
  };

const Result: FC<ChildProps> = ({
	input,
	row,
	currentPage,
	setCurrentPage
  }): ReactElement => {
  const [data, setData] = useState({
    kind: "default",
    totalItems: 0,
    items: []
  });

  const query = new URLSearchParams({ q: input });

  const str = "https://www.googleapis.com/books/v1/volumes?" + query + "&filter=full&projection=lite";

  const getData = async () => {
    const data = await fetch(str, { method: "GET" }).then((res) => res.json());
    setData(data);
  };

  useEffect(() => {
    getData();
  }, [input]);

  return (
    <div>
      <div>
        {data.totalItems > 0 ? (
          <>
            <Pagination
              data={data.items}
			  query={str}
			  nitem={data.totalItems}
              dataLimit={row}
			  currentPage={currentPage}
			  setCurrentPage={setCurrentPage}
            />
          </>
        ) : (
          <h1>No Books to display</h1>
        )}
      </div>
    </div>
  );
}

export default Result;
