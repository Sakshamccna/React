import React, { useEffect, useState } from 'react'
import { Outlet, UNSAFE_DataRouterStateContext } from 'react-router-dom';
import { isTemplateExpression } from 'typescript';

const Getapi = () => {
    const [data, setData] = useState([])
    useEffect(() => {

        var requestOptions: any = {
            method: 'GET',
            redirect: 'follow'
        };

        fetch("https://localhost:7004/Account/GetUsers", requestOptions)
            .then(response => response.text())
            .then(result => console.log(result))
            .catch(error => console.log('error', error));
    }, [])

    return (
        <>
            <h1> Get Api Call</h1>
            <table border={1}>
                <tbody>
                    <tr>
                        <td>FirstName</td>
                        <td>LastName</td>
                        <td>Email</td>
                        <td>Password</td>
                    </tr>
                    {
                        data.map((item: any, index) =>
                            <tr key={index}>
                                <td>{item.firstName}</td>
                                <td>{item.lastName}</td>
                                <td>{item.email}</td>
                                <td>{item.password}</td>
                            </tr>
                        )
                    }



                </tbody>
            </table>
            <Outlet />
        </>
    )
}

export default Getapi
