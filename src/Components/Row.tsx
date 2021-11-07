import LinesEllipsis from "react-lines-ellipsis";
import { Link } from "react-router-dom";
import Book from "../Pages/Book";

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
  if (smallThumbnail == undefined)
	smallThumbnail = ""
  return (
    <div className="container py-3 my-3 bg-light border">
      <div className="row">
        <div className="col-2">
			<Link to="/Book" state={props.data}>
				<img src={smallThumbnail} className="img-thumbnail" alt="img" />
			</Link>
		</div>
        <div className="col-10">
        	<div className="row">
            	<h2>{title}</h2>
			</div>
			<div className="row">
            	<h4>{subtitle}</h4>
          	</div>
          <div className="row">{authors}</div>
          <div className="row">
            {publisher} - {publishedDate}
          </div>
          <div className="row">
            <LinesEllipsis
              text={description}
              maxLine="2"
              ellipsis="..."
              trimRight
              basedOn="words"
              component="div"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Rows;
