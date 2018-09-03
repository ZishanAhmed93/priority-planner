import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';

//pages
import ViewTodo from './pages/ViewTodo.js';
import PriorityPage from './pages/PriorityPage.js';
import TaskPage from './pages/TaskPage.js';
import BacklogPage from './pages/BacklogPage.js';
import CompletedPage from './pages/CompletedPage.js';
import AddPage from './pages/AddTodo.js';

class App extends Component {
 

  render() {
    return (
      <div className="App">
        This is the app
        
        <Router>

          <div>
            <ul className="navbar">
              <Link to="/priorities" >Priorities </Link>
              <Link to="/tasks">Tasks </Link>
              <Link to="/backlog" >Backlog </Link>
              <Link to="/completed" >Completed </Link>
              <Link to="/add" >Add</Link>    
            </ul>

            <div className="todoPageWrap">
            <Switch>
            <div className="todoPage">
              <Route exact path="/todo/:id" component={ViewTodo} />
              <Route exact path="/priorities" component={PriorityPage} />
              <Route exact path="/tasks/" component={TaskPage} />
              <Route exact path="/backlog/" component={BacklogPage} />
              <Route exact path="/completed/" component={CompletedPage} />
              <Route exact path="/add/" component={AddPage} />
            </div>
            </Switch>
            </div>

          </div>

        </Router>
        
      </div>
    );
  }
}

export default App;
