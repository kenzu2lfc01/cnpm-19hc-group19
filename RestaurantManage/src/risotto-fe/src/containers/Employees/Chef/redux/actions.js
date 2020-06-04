export const REQUEST_API_ORDER_PENDING_DATA = "REQUEST_API_ORDER_PENDING_DATA";
export const RECEIVE_API_ORDER_PENDING_DATA = "RECEIVE_API_ORDER_PENDING_DATA";
export const requestApiOrderPendingData = () => ({ type: REQUEST_API_ORDER_PENDING_DATA });
export const receiveApiOrderPendingData = data => ({ type: RECEIVE_API_ORDER_PENDING_DATA, data });


export const REQUEST_API_ORDER_PROCESSING_DATA = "REQUEST_API_ORDER_PROCESSING_DATA";
export const RECEIVE_API_ORDER_PROCESSING_DATA = "RECEIVE_API_ORDER_PROCESSING_DATA";
export const requestApiOrderProcessingData = () => ({ type: REQUEST_API_ORDER_PROCESSING_DATA });
export const receiveApiOrderProcessingData = data => ({ type: RECEIVE_API_ORDER_PROCESSING_DATA, data });



export const REQUEST_API_POST_UPDATE_STATUS = "REQUEST_API_POST_UPDATE_STATUS";
export const RECEIVE_API_POST_UPDATE_STATUS = "RECEIVE_API_POST_UPDATE_STATUS";
export const requestApiPostUpdateStatus = (payload) => ({ type: REQUEST_API_POST_UPDATE_STATUS, payload });
export const receiveApiPostUpdateStatus = data => ({ type: RECEIVE_API_POST_UPDATE_STATUS, data });
