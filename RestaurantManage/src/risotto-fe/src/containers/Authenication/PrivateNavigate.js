import React, { Component } from 'react';
import { BrowserRouter as Router, Redirect } from 'react-router-dom';

class PrivateNavigate extends Component {
    constructor(props) {
        super(props);
        this.state = { Access_token: sessionStorage.getItem('token') };
    }

    render() {
        return (
            this.state.Access_token != null
                ? <Redirect to='/staff' />
                : <Redirect to='/login' />
        )
    }
}

export default PrivateNavigate;
