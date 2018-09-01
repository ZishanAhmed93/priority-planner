import React from 'react';
import moment from "moment";
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';

class TaskPage extends React.Component {
	constructor() {
		super();
		this.state = {
			tasks: [],
		}
	}
	componentDidMount(){
		fetch('/tasks',{
			headers: {
				'Accept' : 'application.json',
				'Content-type' : 'application.json'
			},
		})
		.then((response) => response.json())
		.then((tasks) => this.setState({tasks}));
	}
  render() {
  
    return (
      <div>
    
        <h2>Tasks</h2>
        {this.state.tasks.sort((a,b) => a.priority < b.priority).map(task =>
        	<div className="todoBlock" key={task.id}>
        		<Link to={`/todo/${task.id}`}> 
        			<div className="todoTitle">{task.title}</div>
        		</Link>
        		<div className="todoDescription">{task.description}</div>
        		<div className="todoPriority">{task.priority}</div>
        		<div className="todoDue">{moment(task.due).format('MMM-Do-YY')}</div>
        	</div>
        )}

      </div>
    );
  }
}

export default TaskPage;
