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
            <h1> Get Api Call</h1>
            <table border={1}>
                <tr>
                    <td>FirstName</td>
                    <td>LastName</td>
                    <td>Email</td>
                    <td>Password</td>
                </tr>
                
                    result.map((item) =>
                )

            </table>
        </>
    )
}

export default Getapi
