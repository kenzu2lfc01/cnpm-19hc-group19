import { RECEIVE_API_TABLE_DATA } from './actions';

const dataTables = (state = {}, { type, data }) => {
    debugger;
    switch (type) {
        case RECEIVE_API_TABLE_DATA:
            return data;
        default:
            return state;
    }
}

export default dataTables;
