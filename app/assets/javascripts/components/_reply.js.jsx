var Reply = React.createClass ({
	render: function () {
		var delete_button = this.props.reply.user_name === this.props.currentUser.name ? <button onClick = {this.props.handleDelete}>Delete</button> : null;
		return (
			<div>
				<h6>by {this.props.reply.user_name}</h6>
				<h5>{this.props.reply.name}</h5>
				<p>{this.props.reply.description}</p>
				{delete_button}
			</div>
		);
	}
});