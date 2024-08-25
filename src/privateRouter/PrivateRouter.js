import React, { Children, useContext } from 'react';
import { Authcontex } from '../Context/Context';
import { Navigate, useLocation } from 'react-router-dom';

const PrivateRouter = ({ children }) => {
    const { user, loading } = useContext(Authcontex)
    const location = useLocation();
    if (loading) {
        <div>Loading....</div>
    }
    if (user && user.uid) {
        return children;
    }
    return <Navigate to='/singin' state={{ from: location }} replace></Navigate>

};

export default PrivateRouter;