import React, { Component } from 'react';
import { Form, FormGroup, Label, Row, Input, Col, Button } from 'reactstrap';

class OrderDetails extends Component {
    constructor(props) {
        super(props);
        this.state = {
            orderDetails: [],
        }
    }

    render() {
        var { dataFoods } = this.props;
        var { orderDetails } = this.state;
        return (
            <Row>
                <Col className="wrap-grid foods" xs="7">
                    <div class="grid">
                        {this.showListfoodsRender(dataFoods)}
                    </div>
                </Col>
                <Col xs="5">
                    <Row>
                        <Col xs="1">
                            <img className="button-back" src="https://img.icons8.com/fluent/48/000000/circled-left-2.png" />
                        </Col>
                        <Col>
                            <h4 style={{ paddingTop: "2%" }}>Thông Tin Đặt Món Chi Tiết</h4>
                        </Col>
                    </Row>
                    {orderDetails != null && orderDetails.length != 0 ?
                        <Form>
                            <div className="wrap-grid order">
                                <div class="grid-order-detail">
                                    {this.showListOrderDetails()}
                                </div>
                            </div>
                            <Button style={{ marginLeft: "23vh", marginTop: "2%", width: "30%" }} type="button" color="success">Xác Nhận</Button>
                        </Form>
                        : <div></div>
                    }
                </Col >
            </Row >
        )
    }

    onSelectfood = (foodName, foodPrice) => {
        var { orderDetails } = this.state;
        var flag = true;
        if (orderDetails.length > 0) {
            for (let item of orderDetails) {
                if (item.foodName == foodName && foodPrice == item.foodPrice) {
                    flag = false;
                }
            }
        }
        if (flag) {
            var orderDetail = {
                foodName,
                foodPrice,
                numberOfFood: 1,
                note: ""
            };
            orderDetails.push(orderDetail);

            this.setState(
                orderDetails
            )
        }
    }

    onDeleteOrderDetail = (index) => {
        var { orderDetails } = this.state;
        orderDetails.splice(index, 1);
        this.setState(
            orderDetails
        )
    }

    showListOrderDetails = () => {
        var articles = [];
        var { orderDetails } = this.state;
        if (orderDetails != null && orderDetails.length > 0) {
            for (let i = 0; i < orderDetails.length; i++) {
                articles.push(<article>
                    <img onClick={() => this.onDeleteOrderDetail(i)} className="btn-close-order" src="https://cdn3.iconfinder.com/data/icons/flat-actions-icons-9/792/Close_Icon_Dark-512.png" />
                    <Row>
                        <FormGroup style={{ width: "45%" }}>
                            <Label>Tên Món Ăn</Label>
                            <Input readOnly value={orderDetails[i].foodName}></Input>
                        </FormGroup>
                        <FormGroup style={{ width: "30%" }}>
                            <Label>Giá Tiền</Label>
                            <Input readOnly value={orderDetails[i].foodPrice}></Input>
                        </FormGroup>
                        <FormGroup style={{ width: "15%" }}>
                            <Label>Số Lượng</Label>
                            <Input type="number" value={orderDetails[i].numberOfFood}></Input>
                        </FormGroup>
                    </Row>
                    <Row>
                        <FormGroup style={{ width: "95%" }}>
                            <Label>Ghi Chú</Label>
                            <Input type="textarea"></Input>
                        </FormGroup>
                    </Row>
                </article>
                )
            }
        }
        return articles;
    }

    showListfoodsRender = (listFoods) => {
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
