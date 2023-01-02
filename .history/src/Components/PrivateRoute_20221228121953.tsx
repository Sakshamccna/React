import React, { useEffect, useState } from 'react';
import { Navigate } from 'react-router-dom';

const PrivateRoute = ({ children }: any) => {
    const [Token, setToken] = useState<any>("");
    useEffect(() => {
        const result = localStorage.getItem('token');
        setToken(result);
    }, [])
    console.log(Token);

    return Token ? children : <Navigate to="/Login" />;
}

export default PrivateRoute
