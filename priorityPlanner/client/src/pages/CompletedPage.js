import React from 'react';
import moment from "moment";
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';

class CompletedPage extends React.Component {
	constructor() {
		super();
		this.state = {
			completed: [],
		}
	}
	componentDidMount(){
		fetch('/completed',{
			headers: {
				'Accept' : 'application.json',
				'Content-type' : 'application.json'
			},
		})
		.then((response) => response.json())
		.then((completed) => this.setState({completed}));
	}
  render() {
  
    return (
      <div>
    
        <h2>Completed</h2>
        {this.state.completed.map(completed =>
        	<div className="todoBlock" key={completed.id}>
        		<Link to={`/todo/${completed.id}`}> 
        			<div className="todoTitle">{completed.title}</div>
        		</Link>
        		<div className="todoDescription">{completed.description}</div>
        		<div className="todoPriority">{completed.priority}</div>
        		<div className="todoDue">{moment(completed.due).format('MMM-Do-YY')}</div>
        	</div>
        )}

      </div>
    );
  }
}

export default CompletedPage;
