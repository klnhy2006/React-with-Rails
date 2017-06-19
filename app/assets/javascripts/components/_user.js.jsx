var User = React.createClass ({
	getInitialState () {
		return {user:{}};
	},
	
	componentDidMount () {
		alert("mounting");
		$.ajax({
			url: "/api/v1/users/"+ this.props.user.id ,
			type: "GET",
			dataType: "json"
		}).done((data)=> {
			this.setState({ user: data});	
		});
	},
	
	render: function () {
		return (
			<div>
				<Main user = {this.state.user}/> 
			</div>
		);
	}
});