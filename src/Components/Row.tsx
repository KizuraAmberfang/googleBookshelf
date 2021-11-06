// function Rows(props:any) {
// 	const {title, subtitle} = props.data;
// 	return (
// 		<div className="row">
// 			<h1>{title}</h1>
// 			<h2>{subtitle}</h2>
// 		</div>
// 	);
// }

function Post(props:any) {
	const { id, title, body } = props.data;
	return (
	  <div className="post">
		<small>{id}</small>
		<h1>{title}</h1>
		<p>{body}</p>
	  </div>
	);
  }

export default Post;