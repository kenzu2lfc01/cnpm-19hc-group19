import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Navbar, Label, Button, Col, Row, FormGroup, Input } from 'reactstrap';
import '../../../assert/styles/chef.scss';
import { requestApiOrderPendingData, requestApiOrderProcessingData, requestApiPostUpdateStatus } from './redux/actions';
import { ORDER_STATUS } from './constants';

class ChefHomePage extends Component {
    constructor(props) {
        super(props);
    }

    componentWillMount() {
        this.props.requestApiOrderPendingData();
        this.props.requestApiOrderProcessingData();
    }

    componentDidUpdate(prevProps) {
        if (this.props.dataPendingOrders.length !== prevProps.dataPendingOrders.length) {
            this.props.requestApiOrderPendingData();
            this.props.requestApiOrderProcessingData();
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
                        <FormGroup style={{ width: "20%" }}>
                            <Label>Tên Bàn:</Label>
                            <Input readonly value={item.table.name} />
                        </FormGroup>
                        <FormGroup style={{ width: "30%" }}>
                            <Label>Tên Món:</Label>
                            <Input readonly value={item.food.name} />
                        </FormGroup>
                        <FormGroup style={{ width: "10%" }}>
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
    }
}

const mapDispatchToProps = dispatch => {
    return {
        requestApiOrderPendingData: () => dispatch(requestApiOrderPendingData()),
        requestApiOrderProcessingData: () => dispatch(requestApiOrderProcessingData()),
        requestApiPostUpdateStatus: (payload) => dispatch(requestApiPostUpdateStatus(payload))
    }
}

const mapStateToProps = state => (
    {
        dataPendingOrders: state.dataPendingOrders,
        dataProcessingOrders: state.dataProcessingOrders,
        dataUpdateOrders: state.dataUpdateOrders
    });

export default connect(mapStateToProps, mapDispatchToProps)(ChefHomePage);
