import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './components/Home';
import AddTutorialPage from './components/AddTutorialPage';

function App() {
  return (
    <Router>
    <div className="App">
      <Switch>
        <Route path="/home" exact component={Home} />
        <Route path="/add" component={AddTutorialPage} />
      </Switch>
    </div>
    </Router>
  );
}

export default App;
