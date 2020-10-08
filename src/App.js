import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Home from './pages/index'
import Project from './pages/project'

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/project' component={Project} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
