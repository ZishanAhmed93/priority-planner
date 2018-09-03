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
		}
		this.handleInputChange = this.handleInputChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
		this.handleRadioChange= this.handleRadioChange.bind(this);
	}

	componentDidMount() {
		// fetch(`/todo/${this.props.match.params.id}`)
		// .then((response) => response.json())
		// .then((todo) => this.setState({
		// 	title: todo.title, 
		// 	description: todo.description,
		// 	priority: todo.priority,
		// 	due: todo.due,
		// 	completed: todo.completed
		// 	})
		// );
	}

  	handleInputChange(event) {
  		const target = event.target;
  		const value = target.value;
  		const name = target.name;
  		// console.log(value);
  		// console.log(name);

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
		fetch(`/todo/`, {
			method: "post",
			headers: {
				'Accept': 'application/json',
				'Content-Type': 'application/json'
			},
			body: JSON.stringify({
				title: this.state.title,
				desciprtion: this.state.description,
				priority: this.state.priority,
				due: this.state.due,
				completed: "false"
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
		return (
	     	<div>
	     		<h2>Todo</h2>
	    			<form onSubmit={this.handleSubmit} className="todoBlock">
	    				<input name="title" 		onChange={this.handleInputChange} placeholder="Title" className="todoTitle"/>
	    				<input name="description" 	onChange={this.handleInputChange} placeholder="Description" className="todoDescription" />
	    				<input name="priority" 		onChange={this.handleInputChange} placeholder="Priority" className="todoPriority" />
	    				<input name="due" 			onChange={this.handleInputChange} placeholder="Due Date" className="todoDue" defaultValue={moment(this.state.due).format('YYYY-MM-DD')}/>
	    				
	    				<input className="todoEditSubmit" type='submit' value="Submit" />
	    			</form >
	    	</div>
	    );
	}
}
export default ViewTodo;