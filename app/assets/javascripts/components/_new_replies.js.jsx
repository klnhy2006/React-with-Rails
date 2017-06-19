var NewReply = React.createClass ({
	handleClick () {
		var name = this.refs.name.value; 
		var description = this.refs.description.value; 
		alert('first');
		$.ajax({ 
			url: '/api/v1/items/' + this.props.item_id +'/commentings/' + this.props.id + '/replies', 
			type: 'POST', 
			data: { reply: { name: name, description: description, user_name: this.props.user_name } }, 
			success: (response) => 
				{ alert(response); this.props.handleSubmit( response ); } 
		});
	},
	render: function () {
		return (
			<div>
				<input ref='name' placeholder='Enter the name of the reply' /> 
				<input ref='description' placeholder='Enter a description' /> 
				<button onClick = {this.handleClick} >Submit</button> 
			</div>
		);
	}
});