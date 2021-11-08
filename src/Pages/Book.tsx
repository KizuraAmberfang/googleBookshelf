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
		volumeInfo: { language },
		volumeInfo: { infoLink }
	  } = location.state
	var image = location.state.volumeInfo?.imageLinks?.thumbnail;
	return (
		// 	di {authors}
		// 	Editore: {publisher}
		// 	Pagine: {pageCount}
		// 	Lingua: {language}
		// 	Descrizione: {description}
		<div className="container py-5">
		<div className="card">
			<div className="card-header">
				<h1>{title}</h1>
				{ subtitle ? 
				<><br /><h4>{subtitle}</h4></> : <></>
				}
			</div>
			<div className="card-body">
				<div className="row no-gutters">
					{ image ? 
					<div className="col-auto">
						<img src={image} className="img-fluid" alt="" />
					</div> : <></>
					}
					<div className="col">
						<div className="card-block px-2">
							{ description ?
								<p className="card-text">{description}</p>
								: <p>Nessuna descrizione disponibile</p>
							}
						</div>
					</div>
				</div>
			</div>
			<div className="card-footer">
				{ infoLink ?
					<a href={infoLink} className="card-link">Maggiori informazioni</a>
					: <>Maggiori Informazioni non disponibili</>
				}
			</div>
			</div>
		</div>
	);
}

export default Book;