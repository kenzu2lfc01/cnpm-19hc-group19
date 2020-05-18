import React, { Component } from 'react';
import { Row, Col, Navbar, NavbarBrand } from 'reactstrap';
import TableDetail from './TableDetail';
import ShowTable from './ShowTable';

import '../../../assert/styles/staff.scss';

class StaffHomePage extends Component {
    render() {
        return (
            <div className="risotto-container">
                <div className="form-create-bill">
                    <Navbar color="light" expand="md">
                        <NavbarBrand color="black">Tạo Đơn Hàng</NavbarBrand>
                    </Navbar>
                    <Row>
                        <Col xs="7">
                            <ShowTable />
                        </Col>
                        <Col xs="5">
                            <TableDetail />
                        </Col>
                    </Row>

                </div>
            </div>
        )
    }
}

export default StaffHomePage
