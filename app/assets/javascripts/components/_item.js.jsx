var Item = React.createClass({ 
	getInitialState() {
        return { 
			editable: false,
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

	handleEdit() {
        if(this.state.editable) { 
			var name = this.refs.name.value; 
			var id = this.props.item.id; 
			var description = this.refs.description.value; 
			var item = {id: id , name: name , description: description}; 
			this.props.handleUpdate(item); 
		}
		this.setState({ editable: !this.state.editable })
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
		var name = this.state.editable ? <input type='text' ref='name' defaultValue={this.props.item.name} /> : <h3>{this.props.item.name}</h3>; 
		var description = this.state.editable ? <input type='text' ref='description' defaultValue={this.props.item.description} />: <p>{this.props.item.description}</p>;
		return ( 
			<div> 
				{name}
				{description}
				<button onClick = {this.props.handleDelete} >Delete</button> 
				<button onClick = {this.handleEdit}>  {this.state.editable ? 'Submit' : 'Edit' } </button> 
				<AllCommentings commentings = {this.state.commentings} handleDelete = {this.handleDelete}/>
				<NewCommenting handleSubmit = {this.handleSubmit} id = {this.props.item.id}/>
			</div> 
		) 
	} 
});