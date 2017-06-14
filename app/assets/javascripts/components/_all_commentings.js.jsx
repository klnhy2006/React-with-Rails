var AllCommentings = React.createClass({
	handleDelete (id) {
		this.props.handleDelete(id);
	},
	
	render: function () {
		var commentings = this.props.commentings.map((commenting) => {
			return (
				<div key = {commenting.id}>
					<Comment commenting = {commenting}
						handleDelete = {this.handleDelete.bind(this, commenting.id)}/>
				</div>
			);
		});
		
		return (
			<div>
				{commentings}
			</div>
		);
	}
});