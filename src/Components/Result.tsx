import { useState, useEffect } from 'react'

function Result() {
    const [data, setData] = useState({
        kind: 'default',
        totalItems: 0
    });

    useEffect(() => {
        if (data.kind === 'default')
            getData()
    })

    const getData = async () => {
        const data = await fetch('https://www.googleapis.com/books/v1/volumes?q=flowers', { method: 'GET' }).then((res) => res.json())
        setData(data);
    }

    return (
        <div>
            {data.totalItems}
        </div>
        );
}

export default Result;