var Register = React.createClass ({
	handleSubmit () {
		var name = this.refs.user_name.value;
		var password = this.refs.password.value;
		alert(password);
		$.ajax({
			method: 'POST',
			url: '/api/v1/users',
			data: { user:{ name: name, password: password } },
		}).done(()=>{alert("done")});
	},
		
	render: function () {
		return (
			<div>
				<input type='text' ref='user_name' placeholder='Enter user name'/><br/>
				<input type='password' ref='password' placeholder='Enter password'/><br/>
				<input type='password' ref='password_confirmation' placeholder='Confirm password'/>
				<button onClick={this.handleSubmit}>Register</button>
			</div>
		);
	}
});