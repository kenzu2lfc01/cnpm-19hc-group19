export const REQUEST_API_GET_ALL_STAFF = "REQUEST_API_GET_ALL_STAFF";
export const RECEIVE_API_GET_ALL_STAFF = "RECEIVE_API_GET_ALL_STAFF";

export const requestApiGetAllStaff = () => ({ type: REQUEST_API_GET_ALL_STAFF });
export const receivetApiGetAllStaff = data => ({ type: RECEIVE_API_GET_ALL_STAFF, data });
