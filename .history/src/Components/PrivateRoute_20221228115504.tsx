import React, { useEffect, useState } from 'react';
import { Navigate } from 'react-router-dom';

const PrivateRoute = ({ children }: any) => {
    debugger
    const [Token, setToken] = useState<any>("");
    useEffect(() => {
        const result = localStorage.getItem('token');
        Token(result);
        console.warn(result);
    }, [])
    console.warn(Token);

    return Token ? children : <Navigate to="/login" />;
}

export default PrivateRoute
