import React, { Component } from 'react';
import './App.css';
import Home from './containers/Manager/Home';
import StaffHomePage from './containers/Employees/Staff/StaffHomePage';
import Login from './containers/Authenication/Login';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import PrivateNavigate from './containers/Authenication/PrivateNavigate'

class App extends Component {
  render() {
    return (
      <Router>
        <PrivateNavigate />
        <Route path='/' exact={true} component={Home} />
        <Route path='/staff' exact={true} component={StaffHomePage} />
        <Route path='/login' exact={true} component={Login} />
      </Router>
    )
  }
}

export default App;
