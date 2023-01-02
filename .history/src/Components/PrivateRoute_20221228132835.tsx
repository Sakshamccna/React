import React, { useEffect, useState } from 'react';
import { Navigate, Outlet } from 'react-router-dom';

const PrivateRoute: React.FC = ({ children }: any) => {
    const token = localStorage.getItem('token')
    // const [Token, setToken] = useState<any>("");
    // setToken(localStorage.getItem("token"));
    // console.log('object :>> ', Token);

    return token ? children : <Navigate to="/Login" />;
}
export default PrivateRoute
