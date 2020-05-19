import { all } from "redux-saga/effects";
import loginSaga from '../containers/Authenication/redux/sagas'

export default function* rootSaga() {
    yield all([
        loginSaga,
    ])
}
