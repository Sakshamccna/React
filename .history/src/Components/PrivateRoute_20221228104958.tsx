import React, { useEffect, useState } from 'react';
import { Navigate } from 'react-router-dom';

const PrivateRoute = (children: any) => {
    const [token, setToken] = useState<any>("");
    useEffect(() => {
        const result: any = localStorage.getItem('token');
        token(result);
        console.warn("token");
    })
    return token ? children : <Navigate to="/login" />;
}

export default PrivateRoute
