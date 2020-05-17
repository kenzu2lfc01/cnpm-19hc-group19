import React, { Component } from 'react';
import { Form, FormGroup, Label, FormFeedback, FormText, Input } from 'reactstrap';

class CreateBill extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Form>
                <h1 style={{ textAlign: "center" }}>Thông Tin Chi Tiết Bàn 1</h1>
                <FormGroup>
                    <Label>Số lượng người:</Label>
                    <Input readOnly value="6/10"></Input>
                </FormGroup>
                <FormGroup>
                    <Label>Tình trạng:</Label>
                    <Input readOnly value="Busy"></Input>
                </FormGroup>
            </Form>
        );
    }
}

export default CreateBill;
