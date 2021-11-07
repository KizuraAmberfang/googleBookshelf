import { useState, useEffect, FC, ReactElement } from "react";
import Pagination from "./Pagination";

type ChildProps = {
	input: string;
	row: number;
  };

const Result: FC<ChildProps> = ({
	input,
	row
  }): ReactElement => {
  const [data, setData] = useState({
    kind: "default",
    totalItems: 0,
    items: []
  });

  const query = new URLSearchParams({ q: input });

  const str =
    "https://www.googleapis.com/books/v1/volumes?" +
    query +
    "&maxResults=" + row + "&startIndex=" + 0;

  const getData = async () => {
    const data = await fetch(str, { method: "GET" }).then((res) => res.json());
    setData(data);
  };

  useEffect(() => {
    getData();
  }, [input]);

  return (
    <div>
		{str}
      <div>
        {data.totalItems > 0 ? (
          <>
		  	{data.totalItems} / {row}
            <Pagination
              data={data.items}
			  nitem={data.totalItems}
              title="Library"
              pageLimit={5}
              dataLimit={row}
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
