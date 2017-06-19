var Main = React.createClass({ 
	render() { 
		return ( 
			<div> 
			<Header user = {this.props.user} /> 
			<Body user = {this.props.user}/>
			</div> 
		) 
	} 
});
