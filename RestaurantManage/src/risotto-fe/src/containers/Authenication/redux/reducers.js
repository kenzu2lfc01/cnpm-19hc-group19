import { RECEIVE_API_LOGIN } from './actions';

const loginReduder = (state = {}, { type, data }) => {
    debugger
    switch (type) {
        case RECEIVE_API_LOGIN:
            return data;
        default:
            return state;
    }
}

export default loginReduder;
