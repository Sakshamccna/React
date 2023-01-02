import React, { useEffect, useState } from 'react'
import { Outlet, UNSAFE_DataRouterStateContext } from 'react-router-dom';
import { isTemplateExpression } from 'typescript';

const Getapi = () => {
    const [data, setData] = useState<any>([{ "firstName": "sak", "lastName": "sham", "email": "Asdf@gmail.com", "password": null }, { "firstName": "System", "lastName": "Admin", "email": "admin@admin.com", "password": null }, { "firstName": "gdfg", "lastName": "fghdf", "email": "saksham@gmail.com", "password": null }, { "firstName": "System", "lastName": "User", "email": "user@user.com", "password": null }])


    useEffect(() => {
        debugger
        let checkdata = data
    }, [])
    const getData = async () => {
        var requestOptions: any = {
            method: 'GET',
            redirect: 'follow'
        };

        return await fetch("https://localhost:7004/Account/GetUsers", requestOptions)
            .then(response => response.text())
            .then((result: any) => {
                debugger
                console.log(result)
                //  setData();
                //   let data = [{ "firstName": "sak", "lastName": "sham", "email": "Asdf@gmail.com", "password": null }, { "firstName": "System", "lastName": "Admin", "email": "admin@admin.com", "password": null }, { "firstName": "gdfg", "lastName": "fghdf", "email": "saksham@gmail.com", "password": null }, { "firstName": "System", "lastName": "User", "email": "user@user.com", "password": null }];
                debugger
            })
            .catch(error => console.log('error', error));
    }
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

                        data.length > 0 ? data.map((item: any) =>

                            <tr>

                                <td>{item.firstName}</td>
                                {/* <td>{item.lastName}</td>
                                <td>{item.email}</td>
                                <td>{item.password}</td> */}
                            </tr>

                        ) : ''
                    }

                </tbody>




            </table>
            <Outlet />
        </>
    )
}

export default Getapi
