
import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';

const ProtectAllUsers = () => {

    const Data = localStorage.getItem("User");
    const User = JSON.parse(Data)

    if (User.Role === 'Developer') {
        return (<Outlet />);
    } else {
        return (<Navigate to={'/'} />);
    }

};

export default ProtectAllUsers;
