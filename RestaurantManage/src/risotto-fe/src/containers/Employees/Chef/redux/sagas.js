import { call, put, takeLatest } from "redux-saga/effects";
import {
    REQUEST_API_ORDER_PENDING_DATA, receiveApiOrderPendingData,
    REQUEST_API_ORDER_PROCESSING_DATA, receiveApiOrderProcessingData,
    REQUEST_API_POST_UPDATE_STATUS, receiveApiPostUpdateStatus
} from './actions';
import { getAllPendingOrder, getAllProcessingOrder, updateStatusOrderDetails } from './api';

function* fetchAllPendingOrders(action) {
    try {
        const data = yield call(getAllPendingOrder);
        yield put(receiveApiOrderPendingData(data));
    } catch (e) {
        console.log(e);
    }
}

function* fetchAllProcessingOrders(action) {
    try {
        const data = yield call(getAllProcessingOrder);
        yield put(receiveApiOrderProcessingData(data));
    } catch (e) {
        console.log(e);
    }
}

function* putOrderDetailStatus(action) {
    try {
        const data = yield call(updateStatusOrderDetails, action.payload);
        yield put(receiveApiPostUpdateStatus(data));
    } catch (e) {
        console.log(e);
    }
}

export default function* chefSaga() {
    yield takeLatest(REQUEST_API_ORDER_PENDING_DATA, fetchAllPendingOrders);
    yield takeLatest(REQUEST_API_ORDER_PROCESSING_DATA, fetchAllProcessingOrders);
    yield takeLatest(REQUEST_API_POST_UPDATE_STATUS, putOrderDetailStatus);
}
