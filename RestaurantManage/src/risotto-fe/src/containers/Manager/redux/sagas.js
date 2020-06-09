import { call, put, takeLatest } from "redux-saga/effects";
import {
    REQUEST_API_GET_ALL_STAFF, receiveApiGetAllStaff,
    REQUEST_API_UPDATE_STAFF, receiveApiUpdateStaff,
    REQUEST_API_ADD_STAFF, receiveApiAddStaff,
    REQUEST_API_DELETE_STAFF, receiveApiDeleteStaff
} from './actions';
import { getAllStaffs, updateStaff, addNewStaff, deleteStaff } from './api';
import toastr from 'reactjs-toastr';
import 'reactjs-toastr/lib/toast.css';

function* fetchAllDataStaffs(action) {
    try {
        const dataStaffs = yield call(getAllStaffs);
        yield put(receiveApiGetAllStaff(dataStaffs));
    } catch (e) {
        console.log(e);
    }
}

function* updateStaffInfor(action) {
    try {
        const dataUpdateStaff = yield call(updateStaff, action.payload);
        yield put(receiveApiUpdateStaff(dataUpdateStaff));
        toastr.success("Cập nhập nhân viên thành công.", "Thông báo", { displayDuration: 3000 });
    } catch (e) {
        console.log(e);
    }
}

function* postStaff(action) {
    try {
        const dataAddStaff = yield call(addNewStaff, action.payload);
        yield put(receiveApiAddStaff(dataAddStaff));
        toastr.success("Thêm nhân viên thành công.", "Thông báo", { displayDuration: 3000 });
    } catch (e) {
        console.log(e);
    }
}

function* removeStaff(action) {
    try {
        const deleteMessage = yield call(deleteStaff, action.payload);
        yield put(receiveApiDeleteStaff(deleteMessage));
        toastr.success("Xóa nhân viên thành công.", "Thông báo", { displayDuration: 3000 });
    } catch (e) {
        console.log(e);
    }
}
export default function* managerSaga() {
    yield takeLatest(REQUEST_API_GET_ALL_STAFF, fetchAllDataStaffs);
    yield takeLatest(REQUEST_API_UPDATE_STAFF, updateStaffInfor);
    yield takeLatest(REQUEST_API_ADD_STAFF, postStaff);
    yield takeLatest(REQUEST_API_DELETE_STAFF, removeStaff);
}
