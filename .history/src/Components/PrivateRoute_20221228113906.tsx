import React, { useEffect, useState } from 'react';
import { Navigate } from 'react-router-dom';

const PrivateRoute = ({ children }: any) => {
    const [token, setToken] = useState<string>("");

    useEffect(() => {
        const result: string = localStorage.getItem('token') || "";
        setToken(result);

    }, [token])
    return token ? children : <Navigate to="/login" />;
}

export default PrivateRoute
