export const REQUEST_API_GET_ALL_STAFF = "REQUEST_API_GET_ALL_STAFF";
export const RECEIVE_API_GET_ALL_STAFF = "RECEIVE_API_GET_ALL_STAFF";

export const requestApiGetAllStaff = () => ({ type: REQUEST_API_GET_ALL_STAFF });
export const receiveApiGetAllStaff = data => ({ type: RECEIVE_API_GET_ALL_STAFF, data });

export const REQUEST_API_UPDATE_STAFF = "REQUEST_API_UPDATE_STAFF";
export const RECEIVE_API_UPDATE_STAFF = "RECEIVE_API_UPDATE_STAFF";

export const requestApiUpdateStaff = (payload) => ({ type: REQUEST_API_UPDATE_STAFF, payload });
export const receiveApiUpdateStaff = data => ({ type: RECEIVE_API_UPDATE_STAFF, data });


export const REQUEST_API_ADD_STAFF = "REQUEST_API_ADD_STAFF";
export const RECEIVE_API_ADD_STAFF = "RECEIVE_API_ADD_STAFF";

export const requestApiAddStaff = (payload) => ({ type: REQUEST_API_ADD_STAFF, payload });
export const receiveApiAddStaff = data => ({ type: RECEIVE_API_ADD_STAFF, data });


export const REQUEST_API_DELETE_STAFF = "REQUEST_API_DELETE_STAFF";
export const RECEIVE_API_DELETE_STAFF = "RECEIVE_API_DELETE_STAFF";

export const requestApiDeleteStaff = (payload) => ({ type: REQUEST_API_DELETE_STAFF, payload });
export const receiveApiDeleteStaff = data => ({ type: RECEIVE_API_DELETE_STAFF, data });

export const REQUEST_API_UPDATE_ACCOUNT = "REQUEST_API_UPDATE_ACCOUNT";
export const RECEIVE_API_UPDATE_ACCOUNT = "RECEIVE_API_UPDATE_ACCOUNT";

export const requestApiUpdateAccount = (payload) => ({ type: REQUEST_API_UPDATE_ACCOUNT, payload });
export const receiveApiUpdateAccount = data => ({ type: RECEIVE_API_UPDATE_ACCOUNT, data });

