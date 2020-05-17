import React, { Component } from 'react';
import { Collapse, Nav, NavItem, NavLink , Navbar} from 'reactstrap';

export default class AppNavbar extends Component {
    constructor(props) {
        super(props);
        this.state = { isOpen: false };
    }

    render() {
        return <Navbar color="dark" dark expand="md">
            <Collapse isOpen={this.state.isOpen} navbar>
                <Nav className="ml-auto" navbar>
                    <NavItem>
                        <NavLink href="/login">Login</NavLink>
                    </NavItem>
                </Nav>
            </Collapse>
        </Navbar>;

    }
}
