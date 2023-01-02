import React, { useEffect, useState } from 'react';
import { Navigate } from 'react-router-dom';

const PrivateRoute = ({ children }: any) => {
    const [token, setToken] = useState<string>("");
    const result: string = localStorage.getItem('token') || "";

    useEffect(() => {
        setToken("Hero");
        console.warn(result);
        setTimeout(() => {
            console.log("TOKEN:", token);
        }, 3000);
        setToken("Test");
    }, [result])

    return token ? children : <Navigate to="/login" />;
}

export default PrivateRoute
