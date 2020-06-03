import React, { Component } from 'react';
import { Navbar, Label, Button, Col, Row } from 'reactstrap';
import '../../../assert/styles/chef.scss';

class ChefHomePage extends Component {
    constructor(props) {
        super(props);
    }

    componentWillMount() {

    }

    render() {
        return (
            <div className="risotto-container">
                <div className="form-create-bill">
                    <Navbar color="light" expand="md">
                        <Col>
                            <Label className="text-success" color="black">Đầu Bếp: ABCD</Label>
                        </Col>
                        <Col xs="3">
                            <Button style={{ marginLeft: "60%", fontWeight: "bold" }} className="text-primary" color="black">Nhập Hàng</Button>
                        </Col>
                    </Navbar>
                    < Row >
                        <Col xs="6">
                            <h4>Danh Sách Món Ăn Đang Chờ Tiếp Nhận</h4>
                            
                        </Col>
                        <Col xs="6">
                            <h4>Danh Sách Món Ăn Đang Được Xử Lý</h4>
                        </Col >
                    </Row >
                </div>
            </div >
        )
    }
}

export default ChefHomePage;
