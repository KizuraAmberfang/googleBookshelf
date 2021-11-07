function Rows(props: any) {
  const {
    volumeInfo: { title },
    volumeInfo: { subtitle }
  } = props.data;
  return (
    <div className="post">
      <h1>{title}</h1> <h5>{subtitle}</h5>
    </div>
  );
}

export default Rows;
