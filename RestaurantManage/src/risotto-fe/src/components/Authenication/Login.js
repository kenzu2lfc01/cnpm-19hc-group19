import React, { Component } from 'react';
import '../../assert/styles/login.scss'
import { Button, Form } from 'react-bootstrap';
import { Redirect } from 'react-router-dom';

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: ''
        };
    }
    login = () => {
        if (this.state.email == 'admin@gmail.com' && this.state.password == '1234qwe') {
            localStorage.setItem('isLogin', true);
            return <Redirect to="/" />
        }
    }

    render() {
        return (
            <div className="risotto-container">
                <Form className="form-login">
                    <h1>Login</h1>
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" placeholder="Enter email" onChange={e => this.setState({ email: e.target.value })} />
                    </Form.Group>
                    <Form.Group controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Password" onChange={e => this.setState({ password: e.target.value })} />
                    </Form.Group>
                    <Form.Group controlId="formBasicCheckbox">
                        <Form.Check type="checkbox" label="Check me out" />
                    </Form.Group>
                    <Button onClick={e => this.login()} className="form-button-login" variant="primary" type="submit">
                        Submit
                </Button>
                </Form>
            </div>
        );
    }
}

export default Login
