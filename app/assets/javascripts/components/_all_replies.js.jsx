var AllReplies = React.createClass ({
	handleDelete (id) {
		this.props.handleDelete(id);
	},
	
	render: function () {
		var replies = this.props.replies.map ((reply) => {
			return (
				<div key = {reply.id}>
					<Reply reply = {reply} handleDelete = {this.handleDelete.bind(this, reply.id)}
					currentUser = {this.props.currentUser}/>
				</div>
			);
		});
		
		return (
			<div>
				{replies}
			</div>
		);
	}
});