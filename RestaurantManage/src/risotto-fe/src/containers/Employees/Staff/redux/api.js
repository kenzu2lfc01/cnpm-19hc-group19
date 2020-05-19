export const getAllTable = async () => {
    const requestOption = {
        header: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + sessionStorage.getItem('token'),
        },
        method: 'GET',
    }
    try {
        const response = await fetch(process.env.API_URL + "manage/table/get", requestOption);
        const data = await response.json();
    } catch (ex) {
        console.log(ex);
    }
}
