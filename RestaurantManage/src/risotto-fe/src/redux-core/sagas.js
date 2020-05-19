import { all } from "redux-saga/effects";
import loginSaga from '../containers/Authenication/redux/sagas'
import getchAllTable from '../containers/Employees/Staff/redux/sagas'

export default function* rootSaga() {
    yield all([
        loginSaga,
        getchAllTable
    ])
}
