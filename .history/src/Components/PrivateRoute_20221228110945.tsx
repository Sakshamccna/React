import React, { useEffect, useState } from 'react';
import { Navigate } from 'react-router-dom';

const PrivateRoute = ({ children }: any) => {
    const [Token, setToken] = useState<any>("");
    const result: any = localStorage.getItem('token');
    setToken(result);
    // console.warn(result);
    console.log(Token);

    return Token ? children : <Navigate to="/login" />;
}

export default PrivateRoute