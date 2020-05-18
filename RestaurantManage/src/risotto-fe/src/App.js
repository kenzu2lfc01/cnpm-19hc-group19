import React, { Component } from 'react';
import './App.css';
import Home from './components/Home';
import StaffHomePage from './components/Employees/Staff/StaffHomePage';
import Login from './components/Authenication/Login';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import PrivateNavigate from './components/Authenication/PrivateNavigate'

class App extends Component {
  render() {
    return (
      <div>
        <Router>
          <PrivateNavigate />
          <Route path='/' exact={true} component={Home} />
          <Route path='/staff' exact={true} component={StaffHomePage} />
          <Route path='/login' exact={true} component={Login} />
        </Router>
      </div>
    )
  }
}

export default App;
