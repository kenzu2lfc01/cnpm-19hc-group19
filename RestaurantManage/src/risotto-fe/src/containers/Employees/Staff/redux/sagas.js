import { call, put, takeLatest } from "redux-saga/effects";
import { REQUEST_API_TABLE_DATA, receivetApiTableData } from './actions';
import { getAllTable } from './api';

function* getchAllTable(action) {
    try {
        const data = yield call(getAllTable());
        yield put(receivetApiTableData(data));
    } catch (e) {
        console.log(e);
    }
}

export default function* getchAllTable() {
    yield takeLatest(REQUEST_API_TABLE_DATA, fetchAllTable)
}
