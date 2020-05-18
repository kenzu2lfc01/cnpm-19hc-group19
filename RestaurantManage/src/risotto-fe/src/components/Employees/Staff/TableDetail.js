import React, { Component } from 'react';
import { Form, FormGroup, Label, Row, Col, Input } from 'reactstrap';

class CreateBill extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Form>
                <h1 style={{ textAlign: "center" }}>Thông Tin Chi Tiết Bàn 1</h1>
                <Row>
                    <FormGroup style={{ width: "25%" }}>
                        <Label>Sức chứa:</Label>
                        <Input readOnly value="10"></Input>
                    </FormGroup>
                    <FormGroup style={{ width: "25%" }}>
                        <Label>Tình trạng:</Label>
                        <Input readOnly value="Busy"></Input>
                    </FormGroup>
                    <FormGroup style={{ width: "25%" }}>
                        <Label>Tình trạng:</Label>
                        <Input readOnly value="Busy"></Input>
                    </FormGroup>
                </Row>
            </Form>
        );
    }
}

export default CreateBill;
