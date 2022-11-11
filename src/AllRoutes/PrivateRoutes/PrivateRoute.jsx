import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';

function PrivateRoute({children}) {
    
    const location = useLocation()

    const isAouth = false
    console.log("Private Route" , location)

    if(!isAouth){
        return <Navigate to="/login" state={location.pathname} />
    }

    return children
}

export default PrivateRoute;