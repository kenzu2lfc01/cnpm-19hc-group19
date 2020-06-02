import { call, put, takeLatest } from "redux-saga/effects";
import {
    REQUEST_API_TABLE_DATA, receivetApiTableData,
    REQUEST_API_TABLE_BY_ID_DATA, receivetApiTableByIdData,
    REQUEST_API_FOODS_DATA, receivetApiFoodData,
    REQUEST_POST_API_ADD_ORDER, receiveApiPostAddOrder,
    REQUEST_POST_API_ADD_ORDER_DETAILS, receiveApiPostAddOrderDetails,
    REQUEST_API_ORDER_READY_DATA, receiveApiOrderReadyData
} from './actions';
import { getAllTable, getTableById, getAllFoods, addNewOrder, addOrderDetails, getAllReadyOrder } from './api';

function* fetchAllTable(action) {
    try {
        const data = yield call(getAllTable);
        yield put(receivetApiTableData(data));
    } catch (e) {
        console.log(e);
    }
}

function* fetchTableByID(action) {
    try {
        const data = yield call(getTableById, action.payload);
        yield put(receivetApiTableByIdData(data));
    } catch (e) {
        console.log(e);
    }
}

function* fetchAllFoods(action) {
    try {
        const data = yield call(getAllFoods);
        yield put(receivetApiFoodData(data));
    } catch (e) {
        console.log(e);
    }
}

function* postNewOrder(action) {
    try {
        const data = yield call(addNewOrder, action.payload);
        yield put(receiveApiPostAddOrder(data));
    } catch (e) {
        console.log(e);
    }
}

function* postOrderDetails(action) {
    try {
        const data = yield call(addOrderDetails, action.payload);
        yield put(receiveApiPostAddOrderDetails(data));
    } catch (e) {
        console.log(e);
    }
}

function* fetchAllReadyOrderDetail(action) {
    try {
        const data = yield call(getAllReadyOrder);
        yield put(receiveApiOrderReadyData(data));
    } catch (e) {
        console.log(e);
    }
}
export default function* fetchTableSaga() {
    yield takeLatest(REQUEST_API_TABLE_DATA, fetchAllTable);
    yield takeLatest(REQUEST_API_TABLE_BY_ID_DATA, fetchTableByID);
    yield takeLatest(REQUEST_API_FOODS_DATA, fetchAllFoods);
    yield takeLatest(REQUEST_POST_API_ADD_ORDER, postNewOrder);
    yield takeLatest(REQUEST_POST_API_ADD_ORDER_DETAILS, postOrderDetails);
    yield takeLatest(REQUEST_API_ORDER_READY_DATA, fetchAllReadyOrderDetail);
}
