import React from 'react';
import moment from "moment";
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';

class PriorityPage extends React.Component {
	constructor() {
		super();
		this.state = {
			priorities: [],
		}
	}

	componentDidMount() {
		fetch('/priority',{
			headers: {
				'Accept' : 'application.json',
				'Content-type' : 'application.json'
			},
		})
		.then((response) => response.json())
		.then((priorities) => this.setState({priorities}));
	}


	render() {
		return (
	     	<div>
	     		<h2>Priorities</h2>
	    		{this.state.priorities.sort((a,b) => a.priority < b.priority).map(priority =>
	    			<div className="todoBlock" key={priority.id}>
	    				<Link to={`/todo/${priority.id}`}> 
	    					<div className="todoTitle">{priority.title}</div>
	    				</Link>
	    				<div className="todoDescription">{priority.description}</div>
	    				<div className="todoPriority">{priority.priority}</div>
	    				<div className="todoDue">{moment(priority.due).format('MMM-D-YY')}</div>
	    			</div>
	    		)}
	    	</div>
	    );
  }
}

export default PriorityPage;
