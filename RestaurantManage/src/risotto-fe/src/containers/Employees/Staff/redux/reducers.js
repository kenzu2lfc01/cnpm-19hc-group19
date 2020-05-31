import { RECEIVE_API_TABLE_DATA, RECEIVE_API_TABLE_BY_ID_DATA, RECEIVE_API_FOODS_DATA, RECEIVE_POST_API_ADD_ORDER, RECEIVE_POST_API_ADD_ORDER_DETAILS} from './actions';

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

export const dataFoods = (state = {}, { type, data }) => {
    switch (type) {
        case RECEIVE_API_FOODS_DATA:
            return data;
        default:
            return state;
    }
}


export const dataOrderBasic = (state = {}, { type, data }) => {
    switch (type) {
        case RECEIVE_POST_API_ADD_ORDER:
            return data;
        default:
            return state;
    }
}


export const dataOrderDetails = (state = {}, { type, data }) => {
    switch (type) {
        case RECEIVE_POST_API_ADD_ORDER_DETAILS:
            return data;
        default:
            return state;
    }
}