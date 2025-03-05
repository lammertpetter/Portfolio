import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import Personal from './pages/Personal';
import Business from './pages/Business';
import Header from './components/Shared/Header';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/personal" component={Personal} />
          <Route path="/business" component={Business} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;