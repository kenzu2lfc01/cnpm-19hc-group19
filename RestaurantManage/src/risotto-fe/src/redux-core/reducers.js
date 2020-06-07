
import { combineReducers } from "redux";
import loginReduder from "../containers/Authenication/redux/reducers";
import { dataTables, dataTable, dataFoods, dataOrderDetails, dataOrderBasic, dataOrderDetailReady, } from "../containers/Employees/Staff/redux/reducers";
import { dataPendingOrders, dataProcessingOrders, dataUpdateOrders, dataImportBill } from "../containers/Employees/Chef/redux/reducers";
import { managerReducers } from '../containers/Manager/redux/reducers';

const rootReducer = combineReducers({
    loginReduder, dataTables, dataTable, dataFoods,
    dataOrderBasic, dataOrderDetails, dataOrderDetailReady,
    dataPendingOrders, dataProcessingOrders, dataUpdateOrders,
    dataImportBill, managerReducers
})

export default rootReducer;
