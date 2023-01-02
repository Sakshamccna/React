import React, { useEffect, useState } from 'react'
import { Outlet, UNSAFE_DataRouterStateContext } from 'react-router-dom';
import { isTemplateExpression } from 'typescript';

const Getapi = () => {
    const [data, setData] = useState<any>([]);

    useEffect(() => {
        var requestOptions: any = {
            method: 'GET',
            redirect: 'follow'
        };

        fetch("https://localhost:7004/Account/GetUsers", requestOptions)
            .then(response => response.json())
            .then((result: any) => {
                setData([result]);

            })
            .catch(error => console.log('error', error));
    }, [])

    console.log('object :>> ', ...[...data]);

    // console.warn(data);
    return (
        <>
            {/* {
                data?.map((x: any) => { x.firstName })} */}
            <h1> Get Api Call</h1>
            <table border={1}>
                <tbody>

                    <tr>
                        <th>FirstName</th>
                        <th>LastName</th>
                        <th>Email</th>
                        <th>Password</th>
                    </tr>
                    {

                        data.map((item: any, index: any) => {

                            return (

                                <tr key={index}>
                                    <td>{item.firstName}</td>
                                    <td>{item.lastName}</td>
                                    <td>{item.email}</td>



                                </tr>
                            )
                        }

                        )
                    }

                </tbody>




            </table>
            <Outlet />
        </>
    )
}

export default Getapi
