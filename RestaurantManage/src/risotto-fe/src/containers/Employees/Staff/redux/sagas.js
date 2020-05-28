import { call, put, takeLatest } from "redux-saga/effects";
import { REQUEST_API_TABLE_DATA, receivetApiTableData, REQUEST_API_TABLE_BY_ID_DATA, receivetApiTableByIdData, REQUEST_API_FOODS_DATA, receivetApiFoodData } from './actions';
import { getAllTable, getTableById, getAllFoods } from './api';

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

export default function* fetchTableSaga() {
    yield takeLatest(REQUEST_API_TABLE_DATA, fetchAllTable);
    yield takeLatest(REQUEST_API_TABLE_BY_ID_DATA, fetchTableByID);
    yield takeLatest(REQUEST_API_FOODS_DATA, fetchAllFoods);
}
