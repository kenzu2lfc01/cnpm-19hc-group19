import { API_URL } from '../../../models/risotto-enviroment';

export const loginApi = async (params) => {
    const requestOptions = {
        headers: { 'Content-Type': 'application/json' },
        method: 'POST',
        body: JSON.stringify({ username: params.username, password: params.password })
    };
    try {
        const response = await fetch(API_URL + 'manage/account/login', requestOptions);
        const userInfor = await response.json();
        var result = {
            userInfor: userInfor,
            Access_Token: response.headers.get("Access_token")
        }
        return result;
    } catch (e) {
        return { isFail: true };
        console.log(e);
    }
}
