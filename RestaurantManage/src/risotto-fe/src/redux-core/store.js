import { createStore, applyMiddleware, combineReducers } from "redux";
import createSagaMiddleware from "redux-saga";
import { logger } from 'redux-logger';
import loginReduder from "../containers/Authenication/redux/reducers";
import { dataTables, dataTable, dataFoods } from "../containers/Employees/Staff/redux/reducers";
import rootSaga from "./sagas";

const sagaMiddleware = createSagaMiddleware();
export default createStore(combineReducers({
    loginReduder, dataTables, dataTable, dataFoods
}), applyMiddleware(sagaMiddleware, logger));

sagaMiddleware.run(rootSaga);
