import React, { useEffect, useState } from 'react';
import { Navigate } from 'react-router-dom';

const PrivateRoute = ({ children }) => {
    const [Token, setToken] = useState<any>("");
    useEffect(() => {
        const result: any = localStorage.getItem('token');
        Token(result);
        console.warn("token");
    })
    return Token ? children : <Navigate to="/login" />;
}

export default PrivateRoute