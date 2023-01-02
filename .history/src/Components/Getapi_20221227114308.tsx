import React, { useEffect, useState } from 'react'
import { Outlet, UNSAFE_DataRouterStateContext } from 'react-router-dom';
import { isTemplateExpression } from 'typescript';

const Getapi = () => {
    const [data, setData] = useState<any>([])


    useEffect(() => {
        var requestOptions: any = {
            method: 'GET',
            redirect: 'follow'
        };

        fetch("https://localhost:7004/Account/GetUsers", requestOptions)
            .then(response => response.text())
            .then((result: any) => { setData(result) })
            .catch(error => console.log('error', error));
        debugger
        let filterData = data.map((x: any) => {

        })
    }, [])

    // console.warn(data);
    return (
        <>
            {
                data.length > 0 ?
                    data.map((x: any) => {
                        x
                    }) : ''
            }
            <h1> Get Api Call</h1>
            <table border={1}>
                <tbody>

                    <tr>
                        <th>FirstName</th>
                        <th>LastName</th>
                        <th>Email</th>
                        <th>Password</th>
                    </tr>
                    {/* {

                        data.length > 0 ? data.map((item: any) =>

                            <tr>

                                <td>{item.firstName}</td>
                                <td>{item.lastName}</td>
                                <td>{item.email}</td>
                                <td>{item.password}</td>
                            </tr>

                        ) : ''
                    } */}

                </tbody>




            </table>
            <Outlet />
        </>
    )
}

export default Getapi
