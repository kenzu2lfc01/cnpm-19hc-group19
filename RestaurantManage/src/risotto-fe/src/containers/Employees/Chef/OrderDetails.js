import React, { Component } from 'react';
import { Navbar, Label, Button, Col, Row, FormGroup, Input } from 'reactstrap';
import { RESPONSE_STATUS } from '../../../models/constants';
import { ORDER_STATUS } from './constants';

class OrderDetails extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoad: false
        }
    }

    componentWillMount() {
        this.props.requestApiOrderPendingData();
        this.props.requestApiOrderProcessingData();
    }

    componentDidUpdate() {
        var { isLoad } = this.state;
        var { dataUpdateOrders } = this.props;
        if (dataUpdateOrders.status == RESPONSE_STATUS.success && !isLoad) {
            this.props.requestApiOrderPendingData();
            this.props.requestApiOrderProcessingData();
            isLoad = true;
        }
    }

    render() {
        var { dataPendingOrders, dataProcessingOrders } = this.props;
        return (
            <div className="risotto-container">
                <div className="form-create-bill">
                    <Navbar color="light" expand="md">
                        <Col>
                            <h3 className="text-success" color="black">Đầu Bếp: {sessionStorage.getItem("name")}</h3>
                        </Col>
                        <Col xs="3" className="col-wrap-btn">
                            <Button style={{ fontWeight: "bold", fontSize: "23px" }} className="text-primary" color="black">Nhập Hàng</Button>
                        </Col>
                    </Navbar>
                    < Row >
                        <Col xs="6">
                            <h4>Danh Sách Món Ăn Đang Chờ Tiếp Nhận</h4>
                            {dataPendingOrders && dataPendingOrders.length > 0 ?
                                <div className="wrap-grid chef">
                                    <div class="grid-order-pending ">
                                        {this.showOrders(dataPendingOrders, true)}
                                    </div>
                                </div>
                                : <></>
                            }
                        </Col>
                        <Col xs="6">
                            <h4>Danh Sách Món Ăn Đang Được Xử Lý</h4>
                            {dataProcessingOrders && dataProcessingOrders.length > 0 ?
                                <div className="wrap-grid chef">
                                    <div class="grid-order-pending ">
                                        {this.showOrders(dataProcessingOrders, false)}
                                    </div>
                                </div>
                                : <></>
                            }
                        </Col >
                    </Row >
                </div>
            </div >
        )
    }

    showOrders = (dataOrders, isPending) => {
        var elements = [];
        for (var item of dataOrders) {
            let id = item.id;
            elements.push(
                <article>
                    <Row>
                        <FormGroup style={{ width: "15%" }}>
                            <Label>Tên Bàn:</Label>
                            <Input readonly value={item.table.name} />
                        </FormGroup>
                        <FormGroup style={{ width: "30%" }}>
                            <Label>Tên Món:</Label>
                            <Input readonly value={item.food.name} />
                        </FormGroup>
                        <FormGroup style={{ width: "15%" }}>
                            <Label>Số Lượng:</Label>
                            <Input readonly value={item.amount} />
                        </FormGroup>
                        <FormGroup style={{ width: "30%" }}>
                            {isPending ?
                                < Button onClick={() => this.onUpdateStatus(id, ORDER_STATUS.progress)} className="btn-accept" color="primary">Tiếp Nhận</Button> :
                                < Button onClick={() => this.onUpdateStatus(id, ORDER_STATUS.ready)} className="btn-accept" color="success">Hoàn Thành</Button>
                            }
                        </FormGroup>
                    </Row>
                    <Row>
                        <FormGroup style={{ width: "90%" }}>
                            <Label>Ghi chú:</Label>
                            <Input readonly value={item.note} />
                        </FormGroup>
                    </Row>
                </article >
            )
        }
        return elements;
    }

    onUpdateStatus = (id, status) => {
        var { requestApiPostUpdateStatus } = this.props;
        requestApiPostUpdateStatus({ id, status });
        this.setState({
            isLoad: false
        })
    }
}
export default OrderDetails;
