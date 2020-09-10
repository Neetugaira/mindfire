import React from 'react';
import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";
import Login from './components/login/Login';
import Dashboard from './components/dashboard';
import Header from './components/header/Header';
import Count from './components/count/Count';

function App() {
  return (
        <Router>
          <Route exact path="/" component={Login} />
          <Header/>
          <div className="main-wrapper">
            <Route path="/dashboard" component={Dashboard} />
            <Route path="/countReport" component={Count} />
          </div>
        </Router>
  )
}

export default App;
