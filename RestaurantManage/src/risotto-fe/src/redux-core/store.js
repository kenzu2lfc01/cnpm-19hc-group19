import { createStore, applyMiddleware, combineReducers } from "redux";
import createSagaMiddleware from "redux-saga";
import { logger } from 'redux-logger';
import loginReduder from "../containers/Authenication/redux/reducers";
import { dataTables, dataTable, dataFoods, dataOrderDetails, dataOrderBasic } from "../containers/Employees/Staff/redux/reducers";
import rootSaga from "./sagas";

const sagaMiddleware = createSagaMiddleware();
export default createStore(combineReducers({
    loginReduder, dataTables, dataTable, dataFoods, dataOrderBasic,
    dataOrderDetails
}), applyMiddleware(sagaMiddleware, logger));

sagaMiddleware.run(rootSaga);
