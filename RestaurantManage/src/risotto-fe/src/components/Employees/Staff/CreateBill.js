import React, { Component, useDebugValue } from 'react';
import '../../../assert/styles/staff.scss'
import { Row, Col, Navbar, NavbarBrand, Form, FormGroup, Label, FormFeedback, FormText, Input } from 'reactstrap';
import RisottoCard from '../../Properties/RisottoCard';
import TableDetail from './TableDetail';

class CreateBill extends Component {
    constructor(props) {
        super(props);
    }

    imagesRender = () => {
        var indents = [];
        for (var i = 0; i < 20; i++) {
            if (i % 2 == 0) {
                indents.push(
                    <RisottoCard srcImg="https://i0.wp.com/s1.uphinh.org/2020/05/17/15896858521709058.png"
                        bodyCard={"Bàn " + (i + 1)}
                        status="busy" />
                );
            }
            else {
                indents.push(
                    <RisottoCard srcImg="https://i0.wp.com/s1.uphinh.org/2020/05/17/15896858521709058.png"
                        bodyCard={"Bàn " + (i + 1)}
                        status="free" />
                );
            }
        }
        return indents;
    }

    render() {
        return (
            <div>
                <div className="risotto-container">
                    <div className="form-create-bill">
                        <Navbar color="light" expand="md">
                            <NavbarBrand color="black">Tạo Đơn Hàng</NavbarBrand>
                        </Navbar>
                        <Row>
                            <Col xs="7">
                                <div style={{ textAlign: "center" }}>
                                    {this.imagesRender()}
                                </div>
                            </Col>
                            <Col xs="5">
                                <TableDetail />
                            </Col>
                        </Row>

                    </div>
                </div>
            </div >
        );
    }
}

export default CreateBill;
