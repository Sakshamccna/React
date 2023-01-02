import React, { useEffect, useState } from 'react';
import { Navigate } from 'react-router-dom';

const PrivateRoute = ({ user }: any) => {
    if (!user) {
        return <Navigate to="/Login" replace />;
    }

    return <Navigate to="/Sidebar" replace />;
};

export default PrivateRoute;

