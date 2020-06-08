import { all, fork } from "redux-saga/effects";
import loginSaga from '../containers/Authenication/redux/sagas'
import staffSaga from '../containers/Employees/Staff/redux/sagas'
import chefSaga from '../containers/Employees/Chef/redux/sagas'
import managerSaga from '../containers/Manager/redux/sagas'
import cashierSaga from '../containers/Employees/Cashier/redux/sagas'

export default function* rootSaga() {
    yield all([
        fork(loginSaga),
        fork(staffSaga),
        fork(chefSaga),
        fork(managerSaga),
        fork(cashierSaga),
    ]);
}
