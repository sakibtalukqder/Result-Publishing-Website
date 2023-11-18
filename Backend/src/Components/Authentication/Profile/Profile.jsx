import React from 'react';
import second from '../../../assets/1.jpg'
import { Link } from 'react-router-dom';

const Profile = () => {

    const Data = [(JSON.parse(localStorage.getItem('User')))];
    console.log(Data);


    return (
        <div>

            {
                Data.map((user, index) => (
                    <div key={index} className="border shadow-lg overflow-hidden py-8">
                        <div className="flex justify-center items-center w-full my-4">
                            <div className="flex justify-center">
                                <figure className="w-32 h-32 rounded-full overflow-hidden">
                                    <img
                                        src={second || user.Image}
                                        alt="User's Profile"

                                    />
                                </figure>
                            </div>

                            <div className="ms-6">
                                <h1 className="text-2xl font-semibold">{user.FullName}</h1>
                                <p className="my-2">{user.Email}</p>
                                <p className="btn cursor-default">{user.Role ? user.Role : "Role Not set"}</p>
                            </div>
                        </div>
                        <div className='flex justify-center'>
                            <Link to={user._id} className="btn btn-outline btn-secondary ">Update Profile</Link>
                        </div>
                    </div>
                ))
            }

        </div>
    );
};

export default Profile;