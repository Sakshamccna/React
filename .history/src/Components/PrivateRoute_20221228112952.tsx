import React, { useEffect, useState } from 'react';
import { Navigate } from 'react-router-dom';

const PrivateRoute = ({ children }: any) => {
    const [token, setToken] = useState<string>("");
    const result: string = localStorage.getItem('token') || "";
    setToken(result)
    useEffect(() => {
        return token ? children : <Navigate to="/login" />;
    }, [token])

}

export default PrivateRoute
