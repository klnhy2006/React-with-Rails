var Reply = React.createClass ({
	render: function () {
		return (
			<div>
				<h1>{this.props.reply.name}</h1>
				<p>{this.props.reply.description}</p>
				<button onClick = {this.props.handleDelete}>Delete</button>
			</div>
		);
	}
});