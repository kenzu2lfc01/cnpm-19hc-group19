import React, { Component } from "react";
import { Col, Row, Button } from 'reactstrap';
import '../../assert/styles/manager.scss';

export default class ManageStaff extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="main-manage-staff">
                <Row>
                    <Col xs="6">
                        <Row>
                            <Col xs="6">
                                <h3>Danh sách nhân viên</h3>
                            </Col>
                            <Col style={{ textAlign: "right" }} xs="6">
                                <Button color="primary">Thêm Nhân Viên</Button>
                            </Col>
                        </Row>
                        <div className="wrap-grid manage-staff ">
                            
                        </div>
                    </Col>
                    <Col xs="6">
                        <h4>Thông tin chi tiết nhân viên: Lê Chí Thành</h4>
                    </Col>
                </Row>
            </div>
        )
    }
}