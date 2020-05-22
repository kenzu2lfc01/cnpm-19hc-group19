import React, { Component } from 'react';
import { Form, FormGroup, Label, Row, Input, Button } from 'reactstrap';
import { TABLE_STATUS } from './constants';
import moment from 'moment';

class CreateBill extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        var tableDetail = this.props.tableDetail;
        return (
            <Form>
                <h4 style={{ textAlign: "center" }}>Thông Tin Chi Tiết {tableDetail.name}</h4>
                <Row>
                    <FormGroup style={{ width: "45%" }}>
                        <Label>Sức chứa:</Label>
                        <Input readOnly value={tableDetail.capacity}></Input>
                    </FormGroup>
                    <FormGroup style={{ width: "45%" }}>
                        <Label>Tình trạng:</Label>
                        <Input readOnly value={tableDetail.status}></Input>
                    </FormGroup>
                </Row>
                {tableDetail.status == TABLE_STATUS.busy && tableDetail.lastOrder != null ?
                    <div>
                        <Row>
                            <FormGroup style={{ width: "45%" }}>
                                <Label>Nhân viên: </Label>
                                <Input readOnly value={tableDetail.lastOrder.staff.name}></Input>
                            </FormGroup>
                            <FormGroup style={{ width: "45%" }}>
                                <Label>Khách vào bàn lúc: </Label>
                                <Input readOnly value={moment(tableDetail.lastOrder.createAt).format("DD-MM-YYYY HH:mm:ss")}></Input>
                            </FormGroup>
                            <FormGroup style={{ width: "95%" }}>
                                <Label>Thông tin món ăn: </Label>
                                {this.renderFoodDetailTable(tableDetail.lastOrder.orderDetails)}
                            </FormGroup>
                        </Row>
                    </div>
                    :
                    <FormGroup >
                        <Button color="success">+ New Order</Button>
                    </FormGroup>
                }
            </Form>
        );
    }

    renderFoodDetailTable = (orderDetails) => {
        var orderDetailElement = [];
        for (var orderDetail of orderDetails) {
            orderDetailElement.push(
                <tr>
                    <td>{orderDetail.food.name}</td>
                    <td>{orderDetail.amount}</td>
                    <td>{orderDetail.price}</td>
                    <td>{moment(orderDetail.orderAt).format("HH:mm:ss")}</td>
                    <td>{orderDetail.status}</td>
                    <td>{orderDetail.note}</td>
                </tr>
            );
        }
        return (
            < table class="fixed_header">
                <thead>
                    <tr>
                        <th>Món ăn</th>
                        <th>Số lượng</th>
                        <th>Giá</th>
                        <th>Gọi lúc</th>
                        <th>Trạng thái</th>
                        <th>Ghi chú</th>
                    </tr>
                </thead>
                <tbody>
                    {orderDetailElement}
                </tbody>
            </table>
        )
    }
}

export default CreateBill;
