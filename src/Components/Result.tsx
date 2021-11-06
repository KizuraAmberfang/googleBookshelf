import { useState, useEffect } from 'react'
import Volume from '../Interface/Volume';
import Pagination from './Pagination';
import Rows from './Row';

function Result({ input }:{input:string}, { row }:{row:number}) {

    const [data, setData] = useState({
        kind: 'default',
        totalItems: 0,
		items: []
    });
	
    useEffect(() => {
            getData()
    }, [input])

	const query = new URLSearchParams({q: input})

	const str = "https://www.googleapis.com/books/v1/volumes?" + query;

    const getData = async () => {
        const data = await fetch(str, { method: 'GET' }).then((res) => res.json())
        setData(data);
    }

	const page = Math.ceil(data.totalItems / 20);

	const fields: JSX.Element[] = [];
	for (let i = 1; i <= page; i++) {
  		fields.push(<li className="page-item"><a className="page-link" href="#">{i}</a></li>);
	}

	const [posts, setPosts] = useState([]);
	const [error, setError] = useState('');

	useEffect(() => {
		fetch('https://jsonplaceholder.typicode.com/posts')
		  .then((response) => {
			if (response.ok) return response.json();
			throw new Error('something went wrong while requesting posts');
		  })
		  .then((posts) => setPosts(posts))
		  .catch((error) => setError(error.message));
		}, []);
	
	if (error) return <h1>{error}</h1>;

    return (
        <div>
			{str}
			<br />
			<br />
			<br />
			<br />
			<br />
			{data.totalItems}
			<br />
			Quindi sono {page} pagine
			<br />
    <div>
    	{posts.length > 0 ? (
        <>
        	<Pagination
		  	data={posts}
            title="Posts"
            pageLimit={5}
            dataLimit={10}
        	/>
        </>
      	) : (
       <h1>No Posts to display</h1>
      	)}
    </div>
	<div>
	{posts.length > 0 ? (
	<>
		<Pagination
		data={posts}
		title="Posts"
		pageLimit={5}
		dataLimit={10}
		/>
	</>
	) : (
	<h1>No Posts to display</h1>
	)}
	</div>
	{JSON.stringify(data.items)}
	</div>
    );
}

export default Result;