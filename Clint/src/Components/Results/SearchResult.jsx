import React, { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { HashLoader } from 'react-spinners';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const baseUrl = 'http://localhost:2021/api'

const SearchResult = () => {

    const [Roll, setRoll] = useState("");
    const [Shift, setShift] = useState("");
    const [Class, setClass] = useState("");
    const [error, setError] = useState("");

    
    const obj = {
        Roll: Roll,
        Shift: Shift,
        Class: Class,
    }

    const searchUrl = new URLSearchParams(obj);
    const qString = searchUrl.toString();
    console.log(qString);

    const [prev, setPrev] = useState();
    const [loading, setLoading] = useState();
    const [Data, setData] = useState([]);
    console.log("The Data : ", Data);

    const Search = async (e) => {
        setLoading("true")
        e.preventDefault();

        if (Roll !== "" && Shift !== "" && Class !== "") {
            console.log("Its Done");
            await axios.get(`${baseUrl}/search?${qString}`)
                .then((res) => {
                    setData(res.data);
                    setPrev(res.data);
                    setLoading("");
                })
                .catch((err) => {
                    console.log(err);
                    setLoading("");
                })
        } else {
            toast.error("Fill All the Fields");
        }

    }


    return (
        <>
            <div className="bg-base-200 md:my-8">
                <div className="flex flex-col lg:flex-row items-center">
                    <ToastContainer theme="dark" />
                    <div className="bg-gray-100 md:p-6 w-[100%] rounded md:mx-4">
                        <div className=" mx-auto bg-white p-6 rounded shadow-lg">
                            <h1 className="text-2xl font-semibold mb-4">Search Your results</h1>
                            <form onSubmit={Search} action="#" method="get">
                                <div className="mb-4">
                                    <label className="block text-gray-700 text-sm font-bold mb-2">Roll Number:</label>
                                    <input onChange={(e) => setRoll(e.target.value)} type="text" id="roll" name="Roll" className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500" placeholder="Enter Roll Number" />
                                </div>
                                <div className="mb-4">
                                    <label className="block text-gray-700 text-sm font-bold mb-2">Shift:</label>
                                    <select onChange={(e) => setShift(e.target.value)} type="text" id="registration" name="Reg" className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500" placeholder="Enter Registration Number" >
                                        <option>Select Shift</option>
                                        <option value="Morning">Morning</option>
                                        <option value="Day">Day</option>
                                    </select>
                                </div>
                                <div className="mb-4">
                                    <label className="block text-gray-700 text-sm font-bold mb-2">Select Class:</label>

                                    <select onChange={(e) => setClass(e.target.value)} name="Class" id="Class" className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500">
                                        <option >Select Class</option>
                                        <option value="5">5</option>
                                        <option value="6">6</option>
                                        <option value="7">7</option>
                                        <option value="8">8</option>
                                        <option value="9">9</option>
                                        <option value="10">10</option>
                                    </select>

                                </div>

                                <div className="flex items-center justify-end me-0 m-3">
                                    <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-lg focus:outline-none focus:ring focus:ring-blue-300">Search</button>
                                </div>
                            </form>
                        </div>
                    </div>


                    <div className=' w-[100%] md:mx-4 my-auto '>
                        {
                            !prev && (
                                <div className='flex flex-col items-center justify-center'>
                                    <h1 className=' text-center text-3xl m-4'>Search Your Results</h1>
                                    <HashLoader color="#36d7b7" size={100} />
                                </div>
                            )
                        }

                        {
                            Data.map((res, ind) => (
                                <>
                                    <div key={ind} ref={Components} className="content-print max-w-4xl mx-auto bg-white md:p-8 rounded-lg shadow-lg">

                                        <table className="w-full table-auto mt-6 text-center">
                                            <thead>
                                                <tr>
                                                    <th colSpan={2} className="py-6 border text-left ps-4"><h1 className="text-4xl font-semibold">{res.Name}</h1></th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <td className="border w-1/2 py-2">Roll Number : {res.Roll}</td>
                                                    <td className="border w-1/2 px-4 py-2">Class : {res.Class}</td>
                                                </tr>
                                                <tr>
                                                    <td className="border py-2">Shift : {res.Shift}</td>
                                                    <td className="border py-2">CGPA : {res.cgpa}</td>
                                                </tr>

                                            </tbody>
                                        </table>

                                        <div className="flex justify-between items-center mt-3  p-2 md:p-6">
                                            <div className="">
                                                <p className="text-2xl text-green-500 font-semibold">Total Marks: {res.Total}</p>
                                            </div>
                                            <div>
                                                <p className="text-2xl text-blue-700 font-semibold">CGPA: {res.cgpa}</p>
                                            </div>
                                        </div>
                                        <div className='flex justify-end me-2'>
                                            {
                                                !res.Sub ? <>
                                                    <h1 className=' text-red-500'>Your Result Not Publish Yet....!!</h1>
                                                </>
                                                    : <>
                                                        <Link to={`/result/${res._id}`} className='btn'>View Result</Link>
                                                    </>
                                            }
                                        </div>
                                    </div>

                                </>
                            ))
                        }
                    </div>
                </div>
            </div>
        </>
    );
};

export default SearchResult;
