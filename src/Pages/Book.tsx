import {useLocation} from 'react-router-dom'

function Book () {
	const location = useLocation()
	var {
		volumeInfo: { title },
		volumeInfo: { subtitle },
		volumeInfo: { authors },
		volumeInfo: { description },
		volumeInfo: { publisher },
		volumeInfo: { publishedDate },
		volumeInfo: { pageCount},
		volumeInfo: { language }
	  } = location.state
	return (
		// <div className="container">
		// 	<h1>{title}</h1>
		// 	<h4>{subtitle}</h4>
		// 	di {authors}
		// 	Editore: {publisher}
		// 	Pagine: {pageCount}
		// 	Lingua: {language}
		// 	Descrizione: {description}
		// </div>
		<div className="container">
		<div className="card mx-auto">
			<div className="card-header">Header</div>
			<div className="card-body">Content</div>
				<h4 className="card-title">Card title</h4>
    			<p className="card-text">Some example text. Some example text.</p>
			    <a href="#" className="card-link">Card link</a>
			    <a href="#" className="card-link">Another link</a>
			<div className="card-footer">Footer</div>
		</div>
		</div>
	);
}

export default Book;