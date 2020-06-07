import {
    RECEIVE_API_GET_ALL_STAFF
} from './actions';

export const managerReducers = (state = {}, { type, data }) => {
    switch (type) {
        case RECEIVE_API_GET_ALL_STAFF:
            return data;
        default:
            return state;
    }
}