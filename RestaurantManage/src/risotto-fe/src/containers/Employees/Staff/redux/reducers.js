import { RECEIVE_API_TABLE_DATA, RECEIVE_API_TABLE_BY_ID_DATA } from './actions';

export const dataTables = (state = {}, { type, data }) => {
    switch (type) {
        case RECEIVE_API_TABLE_DATA:
            return data;
        default:
            return state;
    }
}

export const dataTable = (state = {}, { type, data }) => {
    switch (type) {
        case RECEIVE_API_TABLE_BY_ID_DATA:
            return data;
        default:
            return state;
    }
}
