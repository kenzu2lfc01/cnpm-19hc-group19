import { call, put, takeLatest } from "redux-saga/effects";
import {
    REQUEST_API_GET_ALL_STAFF, receiveApiGetAllStaff,
    REQUEST_API_UPDATE_STAFF, receiveApiUpdateStaff,
    REQUEST_API_ADD_STAFF, receiveApiAddStaff,
    REQUEST_API_DELETE_STAFF, receiveApiDeleteStaff,
    REQUEST_API_UPDATE_ACCOUNT, receiveApiUpdateAccount,
    REQUEST_API_ADD_TABLE, receiveApiAddTable
} from './actions';
import {
    getAllStaffs, updateStaff,
    addNewStaff, deleteStaff,
    updateAccount, createNewTable
} from './api';
import toastr from 'reactjs-toastr';
import 'reactjs-toastr/lib/toast.css';

function* fetchAllDataStaffsSaga(action) {
    try {
        const dataStaffs = yield call(getAllStaffs);
        yield put(receiveApiGetAllStaff(dataStaffs));
    } catch (e) {
        console.log(e);
    }
}

function* updateStaffInforSaga(action) {
    try {
        const dataUpdateStaff = yield call(updateStaff, action.payload);
        yield put(receiveApiUpdateStaff(dataUpdateStaff));
    } catch (e) {
        console.log(e);
    }
}

function* postStaffSaga(action) {
    try {
        const dataAddStaff = yield call(addNewStaff, action.payload);
        yield put(receiveApiAddStaff(dataAddStaff));
        toastr.success("Thêm nhân viên thành công.", "Thông báo", { displayDuration: 3000 });
    } catch (e) {
        console.log(e);
    }
}

function* removeStaffSaga(action) {
    try {
        const deleteMessage = yield call(deleteStaff, action.payload);
        yield put(receiveApiDeleteStaff(deleteMessage));
        toastr.success("Xóa nhân viên thành công.", "Thông báo", { displayDuration: 3000 });
    } catch (e) {
        console.log(e);
    }
}

function* updateAccountSaga(action) {
    try {
        const updateAccountData = yield call(updateAccount, action.payload);
        yield put(receiveApiUpdateAccount(updateAccountData));
        toastr.success("Chỉnh sửa tài khoản nhân viên thành công.", "Thông báo", { displayDuration: 3000 });
    } catch (e) {
        console.log(e);
    }
}

function* addNewTable(action) {
    try {
        const addTableData = yield call(createNewTable, action.payload);
        yield put(receiveApiAddTable(addTableData));
    } catch (e) {
        console.log(e);
    }
}

export default function* managerSaga() {
    yield takeLatest(REQUEST_API_GET_ALL_STAFF, fetchAllDataStaffsSaga);
    yield takeLatest(REQUEST_API_UPDATE_STAFF, updateStaffInforSaga);
    yield takeLatest(REQUEST_API_ADD_STAFF, postStaffSaga);
    yield takeLatest(REQUEST_API_DELETE_STAFF, removeStaffSaga);
    yield takeLatest(REQUEST_API_UPDATE_ACCOUNT, updateAccountSaga);
    yield takeLatest(REQUEST_API_ADD_TABLE, addNewTable);
}
