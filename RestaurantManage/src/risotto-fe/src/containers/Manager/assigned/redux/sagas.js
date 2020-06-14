import { call, put, takeLatest } from "redux-saga/effects";
import {
    REQUEST_GET_ALL_STAFF, receiveGetAllStaff
} from './actions';
import { getAllStaffs } from './api';

function* fetchAllStaff(action) {
    try {
        const data = yield call(getAllStaffs);
        yield put(receiveGetAllStaff(data));
    } catch (e) {
        console.log(e);
    }
} 
export default function* assignedSaga() {
    yield takeLatest(REQUEST_GET_ALL_STAFF, fetchAllStaff); 
}
