var NewCommenting = React.createClass({
	handleClick() { 
		var name = this.refs.name.value; 
		var description = this.refs.description.value; 
		$.ajax({ 
			url: '/api/v1/items/' + this.props.id +'/commentings', 
			type: 'POST', 
			data: { comment: { name: name, content: description } }, 
			success: (response) => 
				{ this.props.handleSubmit( response ); } 
		});
	},
	
	render: function () {
		return (
			<div>
				<input ref='name' placeholder='Enter the name of the comment' /> 
				<input ref='description' placeholder='Enter a description' /> 
				<button onClick = {this.handleClick} >Submit</button> 
			</div>
		);
	}
});