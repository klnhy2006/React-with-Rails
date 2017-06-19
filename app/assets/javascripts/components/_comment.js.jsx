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
		var delete_button = (this.props.currentUser.name === this.props.commenting.user_name) ? <button onClick = {this.props.handleDelete}>Delete</button> : null;
		return (
			<div>
				<h6>by {this.props.commenting.user_name}</h6>
				<h4>{this.props.commenting.name}</h4>
				<p>{this.props.commenting.content}</p>
				{delete_button}
				<AllReplies replies = {this.state.replies} handleDelete = {this.handleDelete} currentUser = {this.props.currentUser}/>
				<NewReply handleSubmit = {this.handleSubmit} item_id = {this.props.commenting.item_id} id = {this.props.commenting.id} user_name = {this.props.currentUser.name}/>
			</div>
		);
	}
});