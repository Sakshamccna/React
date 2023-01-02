import React from 'react'

const Getapi = () => {

    var requestOptions: any = {
        method: 'GET',
        redirect: 'follow'
    };

    fetch("https://localhost:7004/Account/GetUsers", requestOptions)
        .then(response => response.text())
        .then(result => console.log(result))
        .catch(error => console.log('error', error));
    return (
        <>

        </>
    )
}

export default Getapi
