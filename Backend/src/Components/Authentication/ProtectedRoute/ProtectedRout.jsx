import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import Worning from './Worning';
import Profile from '../Profile/Profile';

const ProtectedRout = () => {

    const Data = localStorage.getItem("User");
    const User = JSON.parse(Data)
    // console.log(User.Role);

    if (Data) {
        if (User.Role === 'Admin' || User.Role === 'Developer') {
            return (<Outlet />);
        }
        if (!User.Role || User.Role === 'User') {
            return (
                <>
                    <Profile />
                    <Worning />
                </>
            )
        }
    }
    else {
        return (<Navigate to={'/login'} />);
    }
};

export default ProtectedRout;