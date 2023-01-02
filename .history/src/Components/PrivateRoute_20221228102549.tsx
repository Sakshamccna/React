import React, { useEffect, useState } from 'react';
import { Navigate } from 'react-router-dom';

function PrivateRoute(children: any) {
    // const [token, setToken] = useState<any>("");
    // useEffect(() => {
    //     const result: any = localStorage.getItem("token");
    //     token(result);
    // })
    const token = localStorage.getItem("token")
    return token ? children : <Navigate to="/login" />;
}

export default PrivateRoute
