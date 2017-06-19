var Item = React.createClass({ 
	getInitialState() {
        return { 
			commentings: []
		}
    },
	
	componentDidMount () {
		$.ajax({
			method: "GET",
			url: "/api/v1/items/" + this.props.item.id + "/commentings",
			success: (data) => {this.setState({ commentings: data})}
		});
	},
	
	handleSubmit (commenting) {
		var newState = this.state.commentings.concat( commenting );
		this.setState({ commentings: newState});
	},
	
	handleDelete (id) {
		$.ajax ({
			url: '/api/v1/items/'+ this.props.item.id + '/commentings/' + id,
			type: 'DELETE',
			success: () => {
				this.removeComment(id);
			}
		});
	},
	
	removeComment (id) {
		var newCommentings = this.state.commentings.filter ((commenting) => {
			return commenting.id != id;
		});
		this.setState({ commentings: newCommentings });
	},
	
	render() {
		var delete_button = (this.props.item.user_id === this.props.currentId) ? <button onClick = {this.props.handleDelete} >Delete</button> : null;
		return ( 
			<div> 
				<h6>by {this.props.item.user_name}</h6>
				<h3>{this.props.item.name}</h3>
				<p>{this.props.item.description}</p>
				{delete_button}
				<AllCommentings commentings = {this.state.commentings} handleDelete = {this.handleDelete}/>
				<NewCommenting handleSubmit = {this.handleSubmit} id = {this.props.item.id}/>
			</div> 
		) 
	} 
});