import { API_URL } from '../../../../models/risotto-enviroment';

export const getAllTable = async () => {
    const requestOption = {
        header: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + sessionStorage.getItem('token'),
        },
        method: 'GET',
    }
    try {
        const response = await fetch(API_URL + "manage/table/get", requestOption);
        const data = await response.json();
        return data;
    } catch (ex) {
        console.log(ex);
    }
}
