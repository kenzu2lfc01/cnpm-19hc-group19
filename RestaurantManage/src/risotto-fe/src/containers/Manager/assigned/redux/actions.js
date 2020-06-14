export const REQUEST_GET_ALL_STAFF = "REQUEST_GET_ALL_STAFF";
export const RECEIVE_GET_ALL_STAFF = "RECEIVE_GET_ALL_STAFF";
 
export const requestGetAllStaff = () => ({ type: REQUEST_GET_ALL_STAFF})
export const receiveGetAllStaff = (data) => ({ type: RECEIVE_GET_ALL_STAFF, data})