import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';

const BaseUrl = "http://localhost:2021/api"

const Dashboard = () => {

    const [Data, setData] = useState([]);

    const ReadData = () => {
        axios.get(`${BaseUrl}`)
            .then((res) => {
                setData(res.data);
            })
            .catch((err) => {
                console.log(err.messsage);
            })
    }

    useEffect(() => {
        ReadData();
    }, [])

    async function DeleteResult(id) {


        await axios.delete(`${BaseUrl}/delete/${id}`)
            .then((res) => {
                console.log(res.data);
                toast.success('Deleted Succesfully....!!');
                window.location.reload();
            })
            .catch((err) => {
                console.log(err.message);
            })

    }


    return (
        <>
            <div className=' '>
                <ToastContainer />
                <h1 className='text-center text-3xl font-bold py-1'>Dashboard</h1>
            </div>
            <div className="flex items-center mb-6">
                <div className="flex-auto border-t-2 transition duration-500 ease-in-out border-teal-600"></div>
                <div className="flex-auto border-t-2 transition duration-500 ease-in-out border-red-900"></div>
                <div className="flex-auto border-t-2 transition duration-500 ease-in-out border-teal-300"></div>
            </div>

            <div className='mb-5 flex flex-wrap gap-8 justify-center min-w-4xl'>
                {
                    Data.map((user, ind) => (
                        <div key={ind} className="shadow-lg rounded-lg overflow-hidden">
                            <div className="hero px-10 bg-blue-100">
                                <div className="hero-content">
                                    <div className="w-full my-4">
                                        <h1 className="text-3xl font-bold my-3">{user.Name}</h1>
                                            <p className=" text-lg font-bold">Roll : {user.Roll}, Class : {user.Class}, Shift : {user.Shift}</p>
                                        <div className='flex text-center'>
                                            <p className="w-1/2 border p-2"> Total Marks : {user.Total}</p>
                                            <p className="w-1/2 border p-2"> CGPA : {(user.cgpa)}</p>
                                        </div>
                                        <div className='my-4 flex justify-center btn-group rounded-none w-full'>
                                            <Link to={`/update/${user._id}`} className="btn btn-sm btn-primary w-1/3">Update</Link>
                                            <button onClick={(e) => DeleteResult(user._id)} className="btn btn-sm btn-error w-1/3">Delete</button>
                                            <Link to={`/view/${user._id}`} className="btn btn-sm btn-success w-1/3">View</Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>
        </>
    );
};

export default Dashboard;