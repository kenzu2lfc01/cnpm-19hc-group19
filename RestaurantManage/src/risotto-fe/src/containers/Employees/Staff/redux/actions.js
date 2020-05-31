export const REQUEST_API_TABLE_DATA = "REQUEST_API_TABLE_DATA";
export const RECEIVE_API_TABLE_DATA = "RECEIVE_API_TABLE_DATA";
export const REQUEST_API_TABLE_BY_ID_DATA = "REQUEST_API_TABLE_BY_ID_DATA";
export const RECEIVE_API_TABLE_BY_ID_DATA = "RECEIVE_API_TABLE_BY_ID_DATA";
export const REQUEST_API_FOODS_DATA = "REQUEST_API_FOODS_DATA";
export const RECEIVE_API_FOODS_DATA = "RECEIVE_API_FOODS_DATA";
export const REQUEST_POST_API_ADD_ORDER = "REQUEST_POST_API_ADD_ORDER";
export const RECEIVE_POST_API_ADD_ORDER = "RECEIVE_POST_API_ADD_ORDER";
export const REQUEST_POST_API_ADD_ORDER_DETAILS = "REQUEST_POST_API_ADD_ORDER_DETAILS";
export const RECEIVE_POST_API_ADD_ORDER_DETAILS = "RECEIVE_POST_API_ADD_ORDER_DETAILS";

export const requestApiTableData = () => ({ type: REQUEST_API_TABLE_DATA });
export const receivetApiTableData = data => ({ type: RECEIVE_API_TABLE_DATA, data });
export const requestApiTableByIdData = (payload) => ({ type: REQUEST_API_TABLE_BY_ID_DATA, payload });
export const receivetApiTableByIdData = data => ({ type: RECEIVE_API_TABLE_BY_ID_DATA, data });
export const requestApiFoodData = () => ({ type: REQUEST_API_FOODS_DATA });
export const receivetApiFoodData = data => ({ type: RECEIVE_API_FOODS_DATA, data });
export const requestApiPostAddOrder = (payload) => ({ type: REQUEST_POST_API_ADD_ORDER, payload });
export const receiveApiPostAddOrder = data => ({ type: RECEIVE_POST_API_ADD_ORDER, data });
export const requestApiPostAddOrderDetails = (payload) => ({ type: REQUEST_POST_API_ADD_ORDER_DETAILS, payload });
export const receiveApiPostAddOrderDetails = data => ({ type: RECEIVE_POST_API_ADD_ORDER_DETAILS, data });