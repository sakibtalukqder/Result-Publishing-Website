import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const baseUrl = 'http://localhost:2021/admin';

const AllUsers = () => {

    const [User, setUser] = useState()

    const GetData = async () => {
        const responce = await fetch(baseUrl)
        const result = await responce.json()

        if (responce.ok) {
            setUser(result)
        }
        if (!responce.ok) {
            console.log(result.error);
        }
    }

    console.log(User);

    useEffect(() => {
        GetData();
    }, [])

    return (
        <div className=''>
            <table className='border w-full'>
                <tr className=' bg-green-100'>
                    <th className='border py-1 text-2xl w-1/4'>Name</th>
                    <th className='border py-1 text-2xl w-1/4'>Email</th>
                    <th className='border py-1 text-2xl w-1/4'>Role</th>
                    <th className='border py-1 text-2xl w-1/6'>Action</th>
                </tr>

                {
                    User?.map((data, ind) => (
                        <tr key={ind}>
                            <td className='border text-md text-center'>{data.FullName}</td>
                            <td className='border text-md text-center'>{data.Email}</td>
                            {
                                data.Role ? <td className='border text-md text-center'>{data.Role}</td>
                                    :
                                    <td className='border text-xl text-center text-red-500'>Not Set</td>
                            }
                            <td className='border py-1 text-md text-center'>
                                <Link to={`${data._id}`} className='btn-sm btn btn-success rounded-none w-[98%]'>Update</Link>
                            </td>
                        </tr>
                    ))
                }

            </table>
        </div>
    );
};

export default AllUsers;