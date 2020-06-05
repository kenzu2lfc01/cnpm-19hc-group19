import React, { Component } from 'react';
import { Navbar, Col } from 'reactstrap';

export default class CashierHomePage extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="risotto-container">
                <div className="form-create-bill">
                    <Navbar color="light" expand="md">
                        <Col>
                            <h3 className="text-success" color="black">Thu Ngân: {sessionStorage.getItem("name")}</h3>
                        </Col>
                    </Navbar>
                </div>
            </div>
        )
    }
}
