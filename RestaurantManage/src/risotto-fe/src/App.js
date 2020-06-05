import React, { Component } from 'react';
import './App.css';
import StaffHomePage from './containers/Employees/Staff/StaffHomePage';
import Login from './containers/Authenication/Login';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import PrivateNavigate from './containers/Authenication/PrivateNavigate';
import ChefHomePage from './containers/Employees/Chef/ChefHomePage';
import CashierHomePage from './containers/Employees/Cashier/CashierHomePage';

class App extends Component {
  render() {
    return (
      <Router>
        <PrivateNavigate />
        <Route path='/staff' exact={true} component={StaffHomePage} />
        <Route path='/chef' exact={true} component={ChefHomePage} />
        <Route path='/login' exact={true} component={Login} />
        <Route path='/cashier' exact={true} component={CashierHomePage} />
      </Router>
    )
  }
}

export default App;
