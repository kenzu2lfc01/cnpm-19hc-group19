import { RECEIVE_GET_ALL_STAFF } from './actions'


export const listStaffResponse = (state = [], { type, data }) => {
    switch (type) {
        case RECEIVE_GET_ALL_STAFF:
            return data;
        default:
            return state;
    }
} 