import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
const baseUrl = 'http://localhost:2021/admin';


const UpdateProfile = () => {

    const { id } = useParams();
    const jump = useNavigate()

    useEffect(() => {
        const getData = async () => {
            const responce = await fetch(`${baseUrl}/find/${id}`)
            const result = await responce.json();
            if (responce.ok) {
                setFullName(result.FullName)
                setEmail(result.Email)
                setImage(result.Image)
            }
            if (!responce.ok) {
                console.log(result.error);
            }
        }
        getData();
    }, [])

    const [FullName, setFullName] = useState('')
    const [Email, setEmail] = useState('')
    const [Image, setImage] = useState('')

    const UpdateUser = async (e) => {

        e.preventDefault();
        const responce = await fetch(`${baseUrl}/update/${id}`, {
            method: 'PATCH',
            headers: {
                'Content-type': 'application/json',
            },
            body: JSON.stringify({ FullName, Image })
        })
        const result = await responce.json();
        if (responce.ok) {
            console.log(result);
            localStorage.setItem('User',JSON.stringify(result))
            jump('/profile')
        }
        if (!responce.ok) {
            console.log(result.error);
        }
    }

    return (
        <div className='flex w-full'>

            <div className='w-1/2'>

                <form onSubmit={UpdateUser} className="card-body">
                    <h1 className=' font-bold text-3xl text-center pb-4'>Update Your Profile</h1>
                    <div className="form-control">
                        <input value={FullName} onChange={(e) => setFullName(e.target.value)} className="input input-bordered flex items-center" required />
                    </div>
                    <div className="form-control">
                        <input value={Email} className="input input-bordered flex items-center" required />
                    </div>
                    <div className="form-control">
                        <input value={Image} placeholder='Input Image Url form online (BETA)' onChange={(e) => setImage(e.target.value)} className="input input-bordered flex items-center" />
                    </div>
                    <div className="form-control mt-4">
                        <button className="btn btn-secondary">Update</button>
                    </div>
                </form>

            </div>
            <div className='w-1/2 flex items-center justify-center'>
                <h1 className='font-bold text-4xl'>Update Profile</h1>
            </div>
        </div>
    );
};

export default UpdateProfile;