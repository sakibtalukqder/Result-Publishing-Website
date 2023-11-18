import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';

const baseUrl = 'http://localhost:2021/admin';


const Sinup = () => {


    const [FullName, setFullName] = useState('');
    const [Email, setEmail] = useState('');
    const [Password, setPassword] = useState('');
    const [ConfirmPassword, setConfirmPassword] = useState('');

    const jump = useNavigate()

    const SinupUser = async (e) => {

        e.preventDefault();
        const Data = { FullName, Email, Password }

        if (Password === ConfirmPassword) {

            const responce = await fetch(`${baseUrl}/post`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(Data),
            })
            const result = responce.json();
            if (!responce.ok) {
                toast.error(result.error)
            } if (responce.ok) {
                console.log(result);
                jump('/login')
            }

        } else {
            toast.error('Password Not Matched')
        }

    }


    return (
        <div>
            <ToastContainer />
            <div className="hero my-4">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="text-center lg:text-left md:w-1/2">
                        <h1 className="text-5xl font-bold">Signup now!</h1>
                        <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                    </div>
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <form onSubmit={SinupUser} className="card-body">
                            <h1 className=' font-bold text-3xl text-center pb-4'>Signup</h1>
                            <div className="form-control">
                                <input onChange={(e) => setFullName(e.target.value)} type="Text" placeholder="Name" name='name' className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <input onChange={(e) => setEmail(e.target.value)} type="email" placeholder="Email" name='email' className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <input onChange={(e) => setPassword(e.target.value)} type="password" placeholder="Password" name='password' className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <input onChange={(e) => setConfirmPassword(e.target.value)} type="password" placeholder="Confirm Password" name='cPass' className="input input-bordered" required />
                            </div>
                            <div className="form-control mt-4">
                                <button className="btn btn-info">Signup</button>
                            </div>
                            <p className='my-1 text-center'>If you already have an account you can <br /> <Link to='/login' className=' font-bold text-lg underline text-blue-600'>Login</Link></p>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Sinup;