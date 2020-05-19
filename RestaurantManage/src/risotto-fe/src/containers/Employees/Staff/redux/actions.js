export const REQUEST_API_TABLE_DATA = "REQUEST_API_TABLE_DATA";
export const RECEIVE_API_TABLE_DATA = "RECEIVE_API_TABLE_DATA";

export const requestApiTableData = () => ({ type: REQUEST_API_TABLE_DATA });
export const receivetApiTableData = data => ({ type: RECEIVE_API_TABLE_DATA, data });
