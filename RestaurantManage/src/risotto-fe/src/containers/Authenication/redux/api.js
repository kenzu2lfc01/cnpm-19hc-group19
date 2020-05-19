export const loginApi = async (params) => {

    const requestOptions = {
        headers: { 'Content-Type': 'application/json' },
        method: 'POST',
        body: JSON.stringify({ username: params.username, password: params.password })
    };
    try {
        const response = await fetch('https://cnpm19group.herokuapp.com/manage/account/login', requestOptions);
        // fetch('https://cnpm19group.herokuapp.com/manage/account/login', requestOptions).then(function(res){
        //     res.json().then(function(abc){
        //         console.log(abc); <= lam zay thi no ra ma asyn await no ko ra  :( )
        //     })
        // })
         const data = await response.json();
        debugger
        return data;
    } catch (e) {
        console.log(e);
    }
}
