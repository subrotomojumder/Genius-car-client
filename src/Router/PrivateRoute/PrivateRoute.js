import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../../context/AuthProvider/AuthProvider';

const PrivateRoute = ({children}) => {
    const {user, loading} = useContext(AuthContext);
    const location = useLocation();

    if (loading) {
        return <button className="btn loading mx-[40%] my-20">loading</button>;
    }
if (user?.email) {
    return children;
}
    return <Navigate to='/login' state={{from: location}} replace></Navigate>
};

export default PrivateRoute;