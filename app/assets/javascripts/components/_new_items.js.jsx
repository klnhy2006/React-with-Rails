var NewItem = React.createClass({ 
	handleClick() { 
		var name = this.refs.name.value; 
		var description = this.refs.description.value; 
		$.ajax({ 
			url: '/api/v1/items', 
			type: 'POST', 
			data: { item: { name: name, description: description, user_id: this.props.user.id, user_name: this.props.user.name} }, 
			success: (response) => 
				{ this.props.handleSubmit( response ); } 
		});
	},
	
	render() { 
		return ( 
			<div> 
				<input ref='name' placeholder='Enter the name of the item' /> 
				<input ref='description' placeholder='Enter a description' /> 
				<button onClick = {this.handleClick} >Submit</button> 
			</div> 
		) 
	} 
});