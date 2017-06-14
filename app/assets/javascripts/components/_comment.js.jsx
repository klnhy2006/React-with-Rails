var Comment = React.createClass ({
	getInitialState() {
        return { 
			replies: []
		}
    },
	
	componentDidMount () {
		$.ajax({
			method: "GET",
			url: "/api/v1/items/" + this.props.commenting.item_id + "/commentings/" + this.props.commenting.id + '/replies',
			success: (data) => {this.setState({ replies: data})}
		});
	},
	
	handleSubmit: function (reply) {
		var newState = this.state.replies.concat( reply );
		this.setState({ replies: newState });	
	},
	
	handleDelete (id) {
		$.ajax ({
			url: '/api/v1/items/'+ this.props.commenting.item_id + '/commentings/' + this.props.commenting.id + '/replies/' + id,
			type: 'DELETE',
			success: () => {
				this.removeReply(id);
			}
		});
	},
	
	removeReply (id) {
		var newReplies = this.state.replies.filter ((reply) => {
			return reply.id != id;
		});
		this.setState({ replies: newReplies});
	},
	
	render: function () {
		return (
			<div>
				<h1>{this.props.commenting.name}</h1>
				<p>{this.props.commenting.content}</p>
				<button onClick = {this.props.handleDelete}>Delete</button>
				<AllReplies replies = {this.state.replies} handleDelete = {this.handleDelete} />
				<NewReply handleSubmit = {this.handleSubmit} item_id = {this.props.commenting.item_id} id = {this.props.commenting.id} />
			</div>
		);
	}
});