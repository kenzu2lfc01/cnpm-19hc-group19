import React, { Component } from 'react';
import { BrowserRouter as Router, Redirect } from 'react-router-dom';
import AppNavbar from '../../components/AppNavbar';

class PrivateNavigate extends Component {
    constructor(props) {
        super(props);
        this.state = { Access_token: sessionStorage.getItem('token') };
    }

    render() {
        var { data } = this.props
        var { Access_token } = this.state;
        return (
            Access_token
                ?
                <div>
                    <AppNavbar onClick={() => this.onLogout()} />
                    <Redirect to='/staff' />
                </div>
                : <Redirect to='/login' />
        )
    }

    onLogout = () => {
        sessionStorage.removeItem('token');
        this.setState = { Access_token: null };
    }
}

export default PrivateNavigate;
