import React, { useEffect, useState } from 'react';
import { Navigate } from 'react-router-dom';

const PrivateRoute = ({ children }: any) => {
    const [Token, setToken] = useState<string>("");
    const result: any = localStorage.getItem('token');

    useEffect(() => {
        setToken(result);
        console.warn(result);
        console.log("TOKEN:", Token);
    }, [result])

    return Token ? children : <Navigate to="/login" />;
}

export default PrivateRoute
