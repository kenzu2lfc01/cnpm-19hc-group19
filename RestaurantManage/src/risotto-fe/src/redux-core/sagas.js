import { all, fork } from "redux-saga/effects";
import loginSaga from '../containers/Authenication/redux/sagas'
import fetchAllTableSaga from '../containers/Employees/Staff/redux/sagas'

export default function* rootSaga() {
    yield all([
        fork(loginSaga),
        fork(fetchAllTableSaga) 
    ]);
}
