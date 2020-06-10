import {
    RECEIVE_API_GET_ALL_STAFF, RECEIVE_API_UPDATE_STAFF,
    RECEIVE_API_ADD_STAFF, RECEIVE_API_DELETE_STAFF,
    RECEIVE_API_UPDATE_ACCOUNT
} from './actions';

export const managerReducers = (state = {}, { type, data }) => {
    switch (type) {
        case RECEIVE_API_GET_ALL_STAFF:
            return [...data];
        case RECEIVE_API_UPDATE_STAFF:
        case RECEIVE_API_ADD_STAFF:
        case RECEIVE_API_UPDATE_ACCOUNT:
            return { ...data };
        case RECEIVE_API_DELETE_STAFF:
            return data;
        default:
            return state;
    }
}
