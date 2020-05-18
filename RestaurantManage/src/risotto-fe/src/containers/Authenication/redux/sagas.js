import { call, put, takeLatest, all } from "redux-saga/effects";
import { REQUEST_API_LOGIN, receivetApiLogin } from './actions';
import { loginApi } from './api';

function* postLogin(action) {
    try {
        const data = yield call(loginApi, action.payload);
        yield put(receivetApiLogin(data));
    } catch (e) {
        console.log(e);
    }
}

function* actionWatcher() {
    yield takeLatest(REQUEST_API_LOGIN, postLogin)
}


export default function* rootSaga() {
    yield all([
        actionWatcher(),
    ]);
}
