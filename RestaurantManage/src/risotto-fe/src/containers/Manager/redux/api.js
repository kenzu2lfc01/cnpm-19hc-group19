import { API_URL } from '../../../models/risotto-enviroment';
import toastr from 'reactjs-toastr';

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

export const updateStaff = async (param) => {
    const access_Token = 'Bearer ' + sessionStorage.getItem('token')
    const requestOption = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': access_Token
        },
        redirect: 'follow',
        body: JSON.stringify(param)
    }
    try {
        const response = await fetch(API_URL + "manage/staff/update", requestOption);
        const data = await response.json();
        if (data) {
            toastr.success("Cập nhập nhân viên thành công.", "Thông báo", { displayDuration: 3000 });
        }

        return data;
    }
    catch (ex) {
        console.log(ex);
    }
}

export const addNewStaff = async (param) => {
    const access_Token = 'Bearer ' + sessionStorage.getItem('token')
    const requestOption = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': access_Token
        },
        redirect: 'follow',
        body: JSON.stringify(param)
    }
    try {
        const response = await fetch(API_URL + "manage/staff/add", requestOption);
        const data = await response.json();
        return data;
    }
    catch (ex) {
        console.log(ex);
    }
}


export const deleteStaff = async (param) => {
    const access_Token = 'Bearer ' + sessionStorage.getItem('token')
    const requestOption = {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': access_Token
        },
        redirect: 'follow',
    }
    try {
        const response = await fetch(API_URL + "manage/staff/delete/" + param, requestOption);
        return response;
    }
    catch (ex) {
        console.log(ex);
    }
}


export const updateAccount = async (param) => {
    const access_Token = 'Bearer ' + sessionStorage.getItem('token')
    const requestOption = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': access_Token
        },
        redirect: 'follow',
        body: JSON.stringify(param)
    }
    try {
        const response = await fetch(API_URL + "manage/account/update", requestOption);
        const data = await response.json();
        return data;
    }
    catch (ex) {
        console.log(ex);
    }
}


export const createNewTable = async (param) => {
    const access_Token = 'Bearer ' + sessionStorage.getItem('token')
    const requestOption = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': access_Token
        },
        redirect: 'follow',
        body: JSON.stringify(param)
    }
    try {
        const response = await fetch(API_URL + "manage/table/add", requestOption);
        const data = await response.json();

        if (data) {
            toastr.success("Thêm bàn thành công.", "Thông báo", { displayDuration: 3000 });
        }
        return data;
    }
    catch (ex) {
        console.log(ex);
    }
}

