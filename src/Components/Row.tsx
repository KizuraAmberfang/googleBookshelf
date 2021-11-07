function Rows(props: any) {
  const {
    volumeInfo: { title },
    volumeInfo: { subtitle },
    volumeInfo: { authors },
    volumeInfo: { description }
  } = props.data;
  return (
    <div>
      <div className="row">
        <div className="col-2">
          <div>{title}</div>
          <div>
            <small>{subtitle}</small>
          </div>
        </div>
        <div className="col-2">{authors}</div>
        <div className="col-8">{description}</div>
      </div>
    </div>
  );
}

export default Rows;
