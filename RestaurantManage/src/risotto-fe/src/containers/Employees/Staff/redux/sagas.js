import { call, put, takeLatest } from "redux-saga/effects";
import { REQUEST_API_TABLE_DATA, receivetApiTableData } from './actions';
import { getAllTable } from './api';

function* fetchAllTable(action) {
    try {
        const data = yield call(getAllTable());
        yield put(receivetApiTableData(data));
    } catch (e) {
        console.log(e);
    }
}

export default function* fetchAllTableSaga() {
    yield takeLatest(REQUEST_API_TABLE_DATA, fetchAllTable)
}
