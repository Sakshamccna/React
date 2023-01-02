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
            .then((result: any) => { setData(result) })
            .catch(error => console.log('error', error));
    }, [data])
    console.warn(data)

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
                        data.map((item: any) =>
                            <tr >
                                <tr>{item.firstName}</tr>
                                <tr>{item.lastName}</tr>
                                <tr>{item.email}</tr>
                                <tr>{item.password}</tr>
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
