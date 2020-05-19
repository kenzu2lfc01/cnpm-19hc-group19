import { RECEIVE_API_TABLE_DATA } from './actions';

const dataTables = (state = {}, { type, data }) => {
    switch (type) {
        case RECEIVE_API_TABLE_DATA:
            return data;
        default:
            return state;
    }
}

export default dataTables;
