import LinesEllipsis from "react-lines-ellipsis";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBook } from '@fortawesome/free-solid-svg-icons'

function Rows(props: any) {
  var {
    volumeInfo: { title },
    volumeInfo: { subtitle },
    volumeInfo: { authors },
    volumeInfo: { description },
    volumeInfo: { publisher },
    volumeInfo: { publishedDate },
  } = props.data;
  var smallThumbnail = props.data.volumeInfo?.imageLinks?.smallThumbnail
  if (smallThumbnail === undefined)
	smallThumbnail = ""
  return ( props.data ?
    <div className="container-lg container-fluid py-3 my-3 bg-light border">
      <div className="row">
        <div className="col-lg-2">
			<Link to="/Book" state={props.data}>
				{ smallThumbnail !== "" ?
				<img src={smallThumbnail} className="img-thumbnail" alt="img" />
				:
				<FontAwesomeIcon icon={faBook} className="img-thumbnail my-4" size="4x" />
				}
			</Link>
		</div>
        <div className="col-lg-10">
        	<div className="row justify-content-center justify-content-lg-start">
            	<h2>{title}</h2>
			</div>
			<div className="row justify-content-center justify-content-lg-start">
            	<h4>{subtitle}</h4>
          	</div>
          <div className="row text-left text-lg-left">{authors}</div>
          <div className="row">
			{ publisher ? 
				<>Editore: {publisher}</> : <></>
			}
			{ publisher && publishedDate ? 
				<span> - </span> : <></>
			}
			{ publishedDate ?
				<>{publishedDate.substring(0,4)}</> : <></>
			}
		</div>								
		<div className="row text-left pt-2">
			{description ? 
			  <LinesEllipsis
				text={description}
				maxLine="2"
				ellipsis="..."
				trimRight
				basedOn="words"
				component="div"
			  />
			  : <>Nessuna descrizione disponibile</> }
		</div>
        </div>
      </div>
    </div>
	: <></>
  );
}

export default Rows;
