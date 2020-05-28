import React, { Component } from 'react';
import '../../assert/styles/login.scss';
import { Button, Form } from 'react-bootstrap';
import { Redirect } from 'react-router-dom';
import { requestApiLogin } from './redux/actions';
import { connect } from 'react-redux';


class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: ''
        };
    }
    onLogin = () => {
        if (this.state.username != null && this.state.password != null) {
            this.props.requestApiLogin({ username: this.state.username, password: this.state.password });
        }
    }

    onSaveUsername = (event) => {
        this.setState({ username: event.target.value })
    }

    onSavePassword = (event) => {
        this.setState({ password: event.target.value })
    }

    componentWillUpdate(nextProps, prevState) {
        if (nextProps.data.Access_Token) {
            sessionStorage.setItem("token", nextProps.data.Access_Token);
        }
    }

    render() {
        if (this.props.data.Access_Token) {
            return <Redirect to='/staff' />
        }

        return (
            < div className="risotto-container" >

                <Form className="form-login">
                    <h1>Login</h1>
                    <Form.Group>
                        <Form.Label>Username</Form.Label>
                        <Form.Control type="text" placeholder="Enter Username" onChange={e => this.onSaveUsername(e)} />
                    </Form.Group>
                    <Form.Group controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Password" onChange={e => this.onSavePassword(e)} />
                    </Form.Group>
                    <Form.Group controlId="formBasicCheckbox">
                        <Form.Check type="checkbox" label="Check me out" />
                    </Form.Group>
                    <Button onClick={this.onLogin} className="form-button-login" variant="primary" type="button">
                        Submit
                </Button>
                </Form>
            </div >
        );
    }
}


const mapDispatchToProps = dispatch => {
    return {
        requestApiLogin: (payload) => dispatch(requestApiLogin(payload)),
    }
}

const mapStateToProps = state => ({ data: state.loginReduder });

export default connect(mapStateToProps, mapDispatchToProps)(Login);