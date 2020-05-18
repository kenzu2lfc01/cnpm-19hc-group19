import React, { Component } from 'react';
import { BrowserRouter as Router, Redirect } from 'react-router-dom';

class PrivateNavigate extends Component {
    constructor(props) {
        super(props);
        this.state = { isLogin: localStorage.getItem('isLogin') };
    }

    render() {
        return (
            this.state.isLogin != null && this.state.isLogin
                ? <Redirect to='/staff' />
                : <Redirect to='/login' />
        )
    }
}

export default PrivateNavigate;
