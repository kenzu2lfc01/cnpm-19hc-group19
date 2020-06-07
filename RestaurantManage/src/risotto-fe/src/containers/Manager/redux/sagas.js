import { call, put, takeLatest } from "redux-saga/effects";
import {
    REQUEST_API_GET_ALL_STAFF, receiveApiGetAllStaff
} from './actions';
import { getAllStaffs } from './api';

function* fetchAllDataStaffs(action) {
    try {
        const dataStaffs = yield call(getAllStaffs);
        yield put(receiveApiGetAllStaff(dataStaffs));
    } catch (e) {
        console.log(e);
    }
}

export default function* managerSaga() {
    yield takeLatest(REQUEST_API_GET_ALL_STAFF, fetchAllDataStaffs);
}
