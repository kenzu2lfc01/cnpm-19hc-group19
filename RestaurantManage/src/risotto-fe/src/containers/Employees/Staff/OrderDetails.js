import React, { Component } from 'react';
import { Form, FormGroup, Label, Row, Input, Col } from 'reactstrap';

class OrderDetails extends Component {
    constructor(props) {
        super(props);
        this.state = {
            foodName: "",
            foodPrice: "",
        }
    }

    render() {
        var { dataFoods } = this.props;
        var { foodName, foodPrice } = this.state;
        return (
            <Row>
                <Col className="wrap-grid" xs="7">
                    <div class="grid">
                        {this.listfoodsRender(dataFoods)}
                    </div>
                </Col>
                <Col xs="5">
                    <img className="button-back" src="https://img.icons8.com/fluent/48/000000/circled-left-2.png" />
                    <Form>
                        <h4>Thông Tin Đặt Món Chi Tiết</h4>
                        <Row>
                            <FormGroup style={{ width: "45%" }}>
                                <Label>Tên Món Ăn</Label>
                                <Input readOnly value={foodName}></Input>
                            </FormGroup>
                            <FormGroup style={{ width: "30%" }}>
                                <Label>Giá Tiền</Label>
                                <Input readOnly value={foodPrice}></Input>
                            </FormGroup>
                            <FormGroup style={{ width: "15%" }}>
                                <Label>Số Lượng</Label>
                                <Input type="number"></Input>
                            </FormGroup>
                        </Row>
                        <Row>
                            <FormGroup style={{ width: "95%" }}>
                                <Label>Ghi Chú</Label>
                                <Input type="textarea"></Input>
                            </FormGroup>
                        </Row>
                    </Form>
                </Col>
            </Row>
        )
    }

    onSelectfood = (foodName, foodPrice) => {
        this.setState(
            {
                foodName,
                foodPrice
            }
        )
    }

    listfoodsRender = (listFoods) => {
        var indents = [];
        if (listFoods != null && listFoods.length > 0) {
            for (let item of listFoods) {
                let foodName = item.name;
                let foodPrice = item.price;
                indents.push(
                    <article>
                        <img onClick={() => this.onSelectfood(foodName, foodPrice)} src={item.image} alt="Food photo" />
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
