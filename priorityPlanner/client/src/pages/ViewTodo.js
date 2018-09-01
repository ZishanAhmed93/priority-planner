import React from 'react';
import moment from "moment";
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';

class ViewTodo extends React.Component {
	constructor() {
		super();
		this.state = {
			title: [],
			description: [],
			priority: [],
			due: [],
			completed: [],
		}
		this.handleInputChange = this.handleInputChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
		this.handleRadioChange= this.handleRadioChange.bind(this);
	}

	componentDidMount() {
		fetch(`/todo/${this.props.match.params.id}`)
		.then((response) => response.json())
		.then((todo) => this.setState({
			title: todo.title, 
			description: todo.description,
			priority: todo.priority,
			due: todo.due,
			completed: todo.completed
			})
		);
	}

  	handleInputChange(event) {
  		const target = event.target;
  		const value = target.value;
  		const name = target.name;
  		console.log(value);
  		console.log(name);

    	this.setState({[name]: value});
    	console.log(this.state);
  	}

  	handleRadioChange(event) {
		this.setState({
    		completed: event.target.value
  		});
	}

	handleSubmit(event) {
		// event.preventDefault();
		fetch(`/todo/${this.props.match.params.id}`, {
			method: "put",
			headers: {
				'Accept': 'application/json',
				'Content-Type': 'application/json'
			},
			body: JSON.stringify({
				title: this.state.title,
				desciprtion: this.state.description,
				priority: this.state.priority,
				due: this.state.due,
				completed: this.state.completed
			})
		})
		.then(res => res.json())
		.then(json => {
			console.log(json);
		})
		.catch(err => {
			console.log(err.message);
		})
	}

	render() {

		let isComplete = this.state.completed;


		return (
	     	<div>
	     		<h2>Todo</h2>
	    			<form onSubmit={this.handleSubmit} className="todoBlock">
	    				<input name="title" 		onChange={this.handleInputChange} className="todoTitle" defaultValue={this.state.title}/>
	    				<input name="description" 	onChange={this.handleInputChange} className="todoDescription" defaultValue={this.state.description}/>
	    				<input name="priority" 		onChange={this.handleInputChange} className="todoPriority" defaultValue={this.state.priority}/>
	    				<input name="due" 			onChange={this.handleInputChange} className="todoDue" defaultValue={moment(this.state.due).format('MMM-D-YY')}/>
	    				
		    			<div>	
		    				<label>in progress
		    					<input type="radio" value="false" checked={this.state.completed === "false"} onChange={this.handleRadioChange}/>
		    				</label>
		    				<label>completed
								<input type="radio" value="true" checked={this.state.completed === "true"} onChange={this.handleRadioChange}/>
							</label>
						</div>

	    				<input className="todoEditSubmit" type='submit' value="Submit" />
	    			</form >
	    	</div>
	    );
	}
}
export default ViewTodo;