import React, { Component } from 'react';
import { Navbar, NavbarBrand } from 'reactstrap';
import { requestApiTableData, requestApiTableByIdData, requestApiFoodData, requestApiPostAddOrder, requestApiPostAddOrderDetails } from './redux/actions';
import { connect } from 'react-redux';
import '../../../assert/styles/staff.scss';
import OrderDetails from './OrderDetails';
import TableDetal from './TableDetail';

class StaffHomePage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isShowOrderDetails: false
        }
    }

    componentWillMount() {
        this.props.requestApiTableData();
        this.props.requestApiFoodData();
    }

    render() {
        var { isShowOrderDetails } = this.state;
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
                            <NavbarBrand color="black">Thông Tin Bàn</NavbarBrand>
                            {isShowOrderDetails ?
                                <div>
                                    <img width="30px" src="https://www.svgrepo.com/show/177805/right-arrow-arrows.svg" />
                                    <NavbarBrand style={{ paddingLeft: "10px" }} color="black"> Gọi Món</NavbarBrand>
                                </div>
                                : <div></div>
                            }
                        </Navbar>
                        {isShowOrderDetails ?
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

    onBackToTableDetail = (tableId) => {
        var { requestApiTableByIdData, requestApiTableData } = this.props;
        requestApiTableByIdData(tableId);
        requestApiTableData();
        this.setState({
            isShowOrderDetails: false
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
