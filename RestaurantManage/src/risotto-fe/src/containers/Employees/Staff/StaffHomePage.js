import React, { Component } from 'react';
import { Navbar, Button, FormGroup, Label, Input } from 'reactstrap';
import { requestApiTableData, requestApiTableByIdData, requestApiFoodData, requestApiPostAddOrder, requestApiPostAddOrderDetails } from './redux/actions';
import { connect } from 'react-redux';
import '../../../assert/styles/staff.scss';
import OrderDetails from './OrderDetails';
import TableDetal from './TableDetail';
import Modal from 'react-bootstrap/Modal';
import { ORDER_STATUS } from './constants';

class StaffHomePage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isShowOrderDetails: false,
            isShowTableDetails: false
        }
    }

    componentWillMount() {
        this.props.requestApiTableData();
        this.props.requestApiFoodData();
    }

    render() {
        var { isShowOrderDetails, isShowTableDetails } = this.state;
        var { dataTable, dataTables, dataFoods, requestApiPostAddOrderDetails, dataOrderDetails, requestApiTableByIdData } = this.props;
        var tableDetail = dataTables[0];
        if (dataTable != null && dataTable.id) {
            tableDetail = dataTable;
        }
        if (tableDetail) {
            return (
                <div className="risotto-container">
                    <div className="form-create-bill">
                        <Navbar color="light" expand="md">
                            <Button className="text-primary" style={{ fontWeight: "bold" }} color="black">Thông Tin Bàn</Button>
                            <Button className="text-primary" style={{ fontWeight: "bold" }} onClick={() => this.onShowTableDetails()} color="black">Thông Tin Món ăn</Button>
                        </Navbar>
                        {
                            isShowOrderDetails ?
                                <OrderDetails
                                    dataOrderDetails={dataOrderDetails}
                                    selectedTableId={tableDetail.id}
                                    selectedTableName={tableDetail.name}
                                    requestApiPostAddOrderDetails={requestApiPostAddOrderDetails}
                                    onBackToTableDetail={() => this.onBackToTableDetail(tableDetail.id)}
                                    dataFoods={dataFoods} />
                                :
                                <TableDetal
                                    tableDetail={tableDetail}
                                    dataTables={dataTables}
                                    requestApiTableByIdData={requestApiTableByIdData}
                                    onClickShowOrderDetails={() => this.onOnShowOrderDetails(tableDetail.id)}
                                    onGoToOrderDetail={() => this.onOnShowOrderDetails(null)}
                                    selectedTableId={tableDetail.id}
                                />
                        }
                    </div>
                    <>
                        <Modal show={isShowTableDetails} onHide={() => this.onShowTableDetails()}>
                            <Modal.Header closeButton>
                                <Modal.Title>Danh Sách Món Ăn</Modal.Title>
                            </Modal.Header>
                            <Modal.Body>
                                {this.showReadyFood(dataTables)}
                            </Modal.Body>
                        </Modal>
                    </>
                </div>
            );
        }
        else {
            return <div></div>;
        }
    }

    onOnShowOrderDetails = (tableId) => {
        var { requestApiPostAddOrder } = this.props;
        if (tableId) {
            requestApiPostAddOrder(tableId)
        }

        this.setState({
            isShowOrderDetails: true
        })
    }

    showReadyFood = (dataTables) => {
        var newDataTables = dataTables.filter(x => x.lastOrder && x.lastOrder.orderDetails == ORDER_STATUS.ready)
        var elements = [];
        if (dataTables) {
            for (var item of newDataTables) {
                for (var orderDetail of item.lastOrder.orderDetails) {
                    elements.push(
                        <div>
                            <FormGroup style={{ width: "40%" }}>
                                <Label>Tên Món Ăn</Label>
                                <Input readOnly value={orderDetail.food.name}></Input>
                            </FormGroup>
                            <FormGroup style={{ width: "20%" }}>
                                <Label>Tên Bàn</Label>
                                <Input readOnly value={item.name}></Input>
                            </FormGroup>
                            <FormGroup style={{ width: "20%" }}>
                                <Label>Status</Label>
                                <Input readOnly value={orderDetail.status}></Input>
                            </FormGroup>
                        </div>
                    )
                }
            }
        }
        return elements;
    }

    onBackToTableDetail = (tableId) => {
        var { requestApiTableByIdData, requestApiTableData } = this.props;
        requestApiTableByIdData(tableId);
        requestApiTableData();
        this.setState({
            isShowOrderDetails: false
        })
    }

    onShowTableDetails = () => {
        var { isShowTableDetails } = this.state;
        this.setState({
            isShowTableDetails: !isShowTableDetails
        })
    }
}

const mapDispatchToProps = dispatch => {
    return {
        requestApiTableData: () => dispatch(requestApiTableData()),
        requestApiFoodData: () => dispatch(requestApiFoodData()),
        requestApiTableByIdData: (payload) => dispatch(requestApiTableByIdData(payload)),
        requestApiPostAddOrder: (payload) => dispatch(requestApiPostAddOrder(payload)),
        requestApiPostAddOrderDetails: (payload) => dispatch(requestApiPostAddOrderDetails(payload))
    }
}

const mapStateToProps = state => (
    {
        dataTables: state.dataTables,
        dataTable: state.dataTable,
        dataFoods: state.dataFoods,
        dataOrderBasic: state.dataOrderBasic,
        dataOrderDetails: state.dataOrderDetails
    });

export default connect(mapStateToProps, mapDispatchToProps)(StaffHomePage);
