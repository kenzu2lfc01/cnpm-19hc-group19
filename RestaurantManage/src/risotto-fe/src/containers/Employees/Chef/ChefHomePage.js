import React, { Component } from 'react';
import { connect } from 'react-redux';
import '../../../assert/styles/chef.scss';
import { requestApiOrderPendingData, requestApiOrderProcessingData, requestApiPostUpdateStatus } from './redux/actions';
import OrderDetails from './OrderDetails';

class ChefHomePage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoad: false
        }
    }

    render() {
        var { dataPendingOrders, dataProcessingOrders,
            requestApiPostUpdateStatus, requestApiOrderPendingData,
            requestApiOrderProcessingData, dataUpdateOrders } = this.props;

        return (
            <OrderDetails dataPendingOrders={dataPendingOrders}
                dataProcessingOrders={dataProcessingOrders}
                requestApiPostUpdateStatus={requestApiPostUpdateStatus}
                requestApiOrderPendingData={requestApiOrderPendingData}
                requestApiOrderProcessingData={requestApiOrderProcessingData}
                dataUpdateOrders={dataUpdateOrders} />
        )
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
