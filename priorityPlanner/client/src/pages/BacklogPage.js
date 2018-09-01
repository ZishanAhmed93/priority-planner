import React from 'react';
import moment from "moment";
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';

class BacklogPage extends React.Component {
	constructor() {
		super();
		this.state = {
			backlogs: [],
		}
	}
	componentDidMount(){
		fetch('/backlog',{
			headers: {
				'Accept' : 'application.json',
				'Content-type' : 'application.json'
			},
		})
		.then((response) => response.json())
		.then((backlogs) => this.setState({backlogs}));
	}
  render() {
  
    return (
      <div>
    
        <h2>Backlog</h2>
        {this.state.backlogs.sort((a,b) => a.priority < b.priority).map(backlog =>
        	<div className="todoBlock" key={backlog.id}>
        		<Link to={`/todo/${backlog.id}`}> 
        			<div className="todoTitle">{backlog.title}</div>
        		</Link>
        		<div className="todoDescription">{backlog.description}</div>
        		<div className="todoPriority">{backlog.priority}</div>
        		<div className="todoDue">{moment(backlog.due).format('MMM-Do-YY')}</div>
        	</div>
        )}

      </div>
    );
  }
}

export default BacklogPage;
