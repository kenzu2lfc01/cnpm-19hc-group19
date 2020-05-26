import React, { Component } from 'react';
import { Form, FormGroup, Label, Row, Input, Col } from 'reactstrap';

class OrderDetails extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        var { dataFoods } = this.props;
        return (
            <Row>
                <Col className="wrap-grid" xs="7">
                    <div class="grid">
                        {this.listfoodsRender(dataFoods)}
                    </div>
                </Col>
                <Col xs="5">
                    <img src="https://img.icons8.com/fluent/48/000000/circled-left-2.png" />
                    <Form>
                        <h4>Thông Tin Đặt Món Chi Tiết</h4>
                        <Row>
                            <FormGroup style={{ width: "45%" }}>
                                <Label>Tên Món Ăn</Label>
                                <Input readOnly></Input>
                            </FormGroup>
                        </Row>
                    </Form>
                </Col>
            </Row>
        )
    }

    listfoodsRender = (listFoods) => {
        var indents = [];
        if (listFoods != null && listFoods.length > 0) {
            for (let item of listFoods) {
                indents.push(
                    <article>
                        <img src={item.image} alt="Food photo" />
                        <div class="text">
                            <h5>{item.name}</h5>
                            <p>{item.price}</p>
                        </div>
                    </article>
                )
            }
        }
        return indents;
    }
}

export default OrderDetails;
