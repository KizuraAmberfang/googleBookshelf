import LinesEllipsis from "react-lines-ellipsis";

function Rows(props: any) {
  const {
    volumeInfo: { title },
    volumeInfo: { subtitle },
    volumeInfo: { authors },
    volumeInfo: { description },
    volumeInfo: { publisher },
    volumeInfo: { publishedDate }
  } = props.data;
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-2"></div>
        <div className="col-10">
          <div className="row">
            <h4>
              {title}
              <br />
              <small>{subtitle}</small>
            </h4>
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
