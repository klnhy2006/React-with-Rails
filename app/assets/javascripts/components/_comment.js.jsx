var Comment = React.createClass ({
	render: function () {
		return (
			<div>
				<h1>{this.props.commenting.name}</h1>
				<p>{this.props.commenting.content}</p>
				<button onClick = {this.props.handleDelete}>Delete</button>
			</div>
		);
	}
});