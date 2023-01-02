import React, { useEffect, useState } from 'react';
import { Navigate } from 'react-router-dom';

const PrivateRoute = ({ children }: any) => {
    const [Token, setToken] = useState<any>("");
    setToken(localStorage.getItem("token"));
    console.log('object :>> ', Token);

    return Token ? <Navigate to='Sidebar' /> : <Navigate to="/" />;
}

export default PrivateRoute

const PrivateRoute = ({ user, children }) => {
    if (!user) {
        return <Navigate to="/Login" replace />;
    }

    return children;
};