var AllItems = React.createClass({
	handleDelete(id) {
		this.props.handleDelete(id);
	},
	
	render() {
		var id = this.props.current_user.id;
		var items = this.props.items.map((item) => {
			return (
				<div key = {item.id}>
				<Item item = {item} currentId = {id}
						handleDelete = {this.handleDelete.bind(this, item.id)}
				/>
				</div>
			);
		});
		
		return(
			<div>
				{items}
			</div>
		);
	}
});