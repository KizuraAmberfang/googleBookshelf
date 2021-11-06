import { parse } from 'path';
import { useState, useEffect, useRef } from 'react'

function Result({ input }:{input:string}) {

	const previousInputValue = useRef("");

    const [data, setData] = useState({
        kind: 'default',
        totalItems: 0
    });
	
    useEffect(() => {
        // if (data.kind == 'default')
            getData()
		// previousInputValue.current = input;
		// }, [input]);
    }, [input])

	const query = new URLSearchParams({q: input})

	const str = "https://www.googleapis.com/books/v1/volumes?" + query;

    const getData = async () => {
        const data = await fetch(str, { method: 'GET' }).then((res) => res.json())
        setData(data);
    }

    return (
        <div>
			{str}
			<br />
			<br />
			<br />
			<br />
			<br />
            {JSON.stringify(data)}
        </div>
        );
}

export default Result;