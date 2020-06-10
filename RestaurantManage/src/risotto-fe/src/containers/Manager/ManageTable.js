import React, { Component } from 'react';
import { Col, Row, Label, FormGroup } from 'reactstrap';

export default class ManageTable extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <>
                <h1 style={{ textAlign: "center" }}>Quản Lý Bàn Ăn</h1>
                <Row>
                    <Col xs="6">
                        <h3 style={{ textAlign: "center" }}>Danh Sách Bàn Ăn</h3>
                        <table class="table table-bordered manage-table ">
                            <thead>
                                <tr className="table-primary">
                                    <th scope="col">Tên Bàn</th>
                                    <th scope="col">Sức Chứa</th>
                                    <th scope="col">Thao Tác</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>Mark</td>
                                    <td>Otto</td>
                                    <td>@mdo</td>
                                </tr>
                                <tr>
                                    <td>Jacob</td>
                                    <td>Thornton</td>
                                    <td>@fat</td>
                                </tr>
                                <tr>
                                    <td>Jacob</td>
                                    <td>Thornton</td>
                                    <td>@fat</td>
                                </tr>
                                <tr>
                                    <td>Jacob</td>
                                    <td>Thornton</td>
                                    <td>@fat</td>
                                </tr>
                                <tr>
                                    <td>Mark</td>
                                    <td>Otto</td>
                                    <td>@mdo</td>
                                </tr>
                            </tbody>
                        </table>
                        <Row style={{ marginLeft: "30%" }}>
                            <FormGroup style={{ width: "5%" }}>
                                <img style={{ width: "30px" }} src="https://icons.iconarchive.com/icons/icons8/windows-8/512/Arrows-Left-Arrow-icon.png"></img>
                            </FormGroup>
                            <FormGroup style={{ width: "2%" }}>
                                <Label>1</Label>
                            </FormGroup>
                            <FormGroup style={{ width: "2%" }}>
                                <Label>2</Label>
                            </FormGroup>
                            <FormGroup style={{ width: "2%" }}>
                                <Label>3</Label>
                            </FormGroup>
                            <FormGroup style={{ width: "2%" }}>
                                <Label>4</Label>
                            </FormGroup>
                            <FormGroup style={{ width: "2%" }}>
                                <Label>5</Label>
                            </FormGroup>
                            <FormGroup style={{ width: "2%" }}>
                                <Label>6</Label>
                            </FormGroup>
                            <FormGroup style={{ width: "5%" }}>
                                <img style={{ width: "30px" }} src="https://icons.iconarchive.com/icons/icons8/windows-8/512/Arrows-Right-Arrow-icon.png"></img>
                            </FormGroup>
                        </Row>
                    </Col>
                    <Col xs="6">
                        <h3 style={{ textAlign: "center" }}>Thêm Bàn Ăn</h3>

                    </Col>
                </Row>
            </>
        )
    }
}