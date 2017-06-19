var Body = React.createClass({
	getInitialState () {
		return {items: []};
	},
	
	componentDidMount () {
		$.ajax({
			method: "GET",
			url: "/api/v1/items.json",
			success: (data) => {this.setState({ items: data})}
		});
	},
	
	handleSubmit (item) {
		var newState = this.state.items.concat( item );
		this.setState({ items: newState });
	},
	
	handleDelete (id) {
		$.ajax({ 
			url: `/api/v1/items/${id}`, 
			type: 'DELETE', 
			success:() => { 
				this.removeItemClient(id); 
			} 
		});
	},
	
	removeItemClient (id) {
		var newItems = this.state.items.filter((item) => {
			return item.id != id;
		});
		this.setState({ items: newItems});
	},
	
	render () {
		return(
			<div>
				<NewItem user = {this.props.user} handleSubmit = {this.handleSubmit}/>
				<AllItems currentUser = {this.props.user} items = {this.state.items} handleDelete = {this.handleDelete} />
			</div>
		);
	}
});