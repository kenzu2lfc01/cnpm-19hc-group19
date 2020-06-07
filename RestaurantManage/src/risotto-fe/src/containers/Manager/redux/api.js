import { API_URL } from '../../../models/risotto-enviroment';

export const getAllStaffs = async () => {
    const access_Token = 'Bearer ' + sessionStorage.getItem('token');
    const requestOption = {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': access_Token
        },
        redirect: 'follow',
    }
    try {
        const response = await fetch(API_URL + "manage/staff/get", requestOption);
        const data = await response.json();
        return data;
    } catch (ex) {
        console.log(ex);
    }
}