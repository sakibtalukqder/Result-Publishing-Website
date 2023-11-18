import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
const baseUrl = 'http://localhost:2021/admin';


const UpdateUsers = () => {


    const [User, setUser] = useState()
    const { id } = useParams();
    const jump = useNavigate()

    useEffect(() => {
        const getData = async () => {
            const responce = await fetch(`${baseUrl}/find/${id}`)
            const result = await responce.json();
            if (responce.ok) {
                setUser([result])
                // console.log(result);
            }
            if (!responce.ok) {
                console.log(result.error);
            }
        }
        getData();
    }, [])

    const [Role, setRole] = useState('')
    console.log(Role);

    const UpdateUser = async (e) => {

        e.preventDefault();
        const responce = await fetch(`${baseUrl}/update/${id}`, {
            method: 'PATCH',
            headers: {
                'Content-type': 'application/json',
            },
            body: JSON.stringify({ Role })
        })
        const result = await responce.json();
        if (responce.ok) {
            console.log(result);
            jump('/users')
        }
        if (!responce.ok) {
            console.log(result.error);
        }
    }

    return (
        <div className='flex w-full'>

            <div className='w-1/2'>
                {
                    User?.map((data, ind) => (
                        <form onSubmit={UpdateUser} className="card-body">
                            <h1 className=' font-bold text-3xl text-center pb-4'>Update Users Role</h1>
                            <div className="form-control">
                                <div className="input input-bordered flex items-center" required > {data.FullName} </div>
                            </div>
                            <div className="form-control">
                                <div className="input input-bordered flex items-center" required > {data.Email} </div>
                            </div>
                            <div className="form-control">
                                <div className="input input-bordered flex items-center" required > {data._id} </div>
                            </div>
                            <div className="form-control">
                                <select onChange={(e) => setRole(e.target.value)} name="Role" id="" className="input input-bordered">
                                    <option>Select Role</option>
                                    <option value="User">User</option>
                                    <option value="Admin">Admin</option>
                                    <option value="Developer">Developer</option>
                                </select>

                            </div>
                            <div className="form-control mt-4">
                                <button className="btn btn-secondary">Update</button>
                            </div>
                        </form>
                    ))
                }

            </div>
            <div className='w-1/2 flex items-center justify-center'>
                <h1 className='font-bold text-4xl'>Update Users</h1>
            </div>
        </div>
    );
};

export default UpdateUsers;