export const loginApi = async (params) => {

    const requestOptions = {
        headers: { 'Content-Type': 'application/json' },
        method: 'POST',
        body: JSON.stringify({ username: params.username, password: params.password })
    };
    try {
        const response = await fetch('https://cnpm19group.herokuapp.com/manage/account/login', requestOptions);
        const data = await response.json();
        return data;
    } catch (e) {
        console.log(e);
    }
}
