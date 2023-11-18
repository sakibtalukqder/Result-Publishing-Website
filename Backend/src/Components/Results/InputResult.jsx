import axios from 'axios';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const BaseUrl = "http://localhost:2021/api"

const InputResult = () => {



    const [Name, setName] = useState("");
    const [Roll, setRoll] = useState("");
    const [Shift, setShift] = useState("");
    const [Class, setClass] = useState("");
    const [Total, setTotal] = useState(0);

    const Nevigate = useNavigate();

    const ResultIn = async (e) => {

        e.preventDefault();
        
        const arrayObject = object.reduce((result, item) => {
            result[item.subject] = item.mark;
            return result;
        }, {});

        if (Name != "" && Roll != "" && Shift != "" && Class != "") {
            
            await axios.post(`${BaseUrl}/post`, { Name, Roll, Shift, Class, Sub: arrayObject, Total, cgpa })
                .then((res) => console.log(res))
                .catch((err) => console.log(err.message))
            Nevigate('/dashboard');
        
        } else {
            toast.error("Fill All The Fields")
        }

    }




    // Handle  Subject
    const [subject, setSubject] = useState();
    const [mark, setMark] = useState();
    const [object, setObject] = useState([]);

    const [numbers, setNumbers] = useState(0);

    const [noCgpa, setNocgpa] = useState(0);
    const [credit, setCredit] = useState(0);



    const subPush = () => {

        if (subject && mark) {
            const newSub = {
                subject,
                mark: parseFloat(mark)
            }

            setObject([...object, newSub]);
            setTotal(Total + parseFloat(mark));
            setSubject("");
            setMark("");
            setNumbers(numbers + 1);

            if (mark >= 80) {
                setCredit(credit + 4);
            } else if (mark >= 70) {
                setCredit(credit + 3.5);
            } else if (mark >= 60) {
                setCredit(credit + 3);
            } else if (mark >= 50) {
                setCredit(credit + 2.5);
            } else if (mark >= 40) {
                setCredit(credit + 2);
            } else {
                setNocgpa(noCgpa + 1)
            }

        } else {
            toast.error("Insert Subject And Marks")
        }

    }


    const Remove = (ind) => {
        
        const newArray = [...object];

        // Remove the item at the specified index and store it
        const removedItem = newArray.splice(ind, 1)[0];
        setObject(newArray);

        // Update Total and CGPA
        setNumbers(numbers - 1);
        setTotal(Total - removedItem.mark);

        if (removedItem.mark >= 80) {
            setCredit(credit - 4);
        } else if (removedItem.mark >= 70) {
            setCredit(credit - 3.5);
        } else if (removedItem.mark >= 60) {
            setCredit(credit - 3);
        } else if (removedItem.mark >= 50) {
            setCredit(credit - 2.5);
        } else if (removedItem.mark >= 40) {
            setCredit(credit - 2);
        } else {
            setNocgpa(noCgpa - 1);
        }

    };

    const cgpa = ((credit / numbers).toFixed(2));
    if (noCgpa) {
        const cgpa = (`F(${noCgpa})`);
    } 

    return (
        <div>
            <ToastContainer theme='dark' />
            <h1 className=' text-center font-bold text-4xl'>Enter Students Result</h1>
            <div className="mx-4 p-4">
                <div className="flex items-center">

                    <div className="flex-auto border-t-2 transition duration-500 ease-in-out border-teal-600"></div>
                    <div className="flex-auto border-t-2 transition duration-500 ease-in-out border-red-300"></div>
                    <div className="flex-auto border-t-2 transition duration-500 ease-in-out border-teal-300"></div>

                </div>
            </div>

            <div className='flex w-full justify-center items-center flex-col md:flex-row'>
                <div className='w-1/2 md:mx-12'>
                    <form>
                        <div className="mb-4">
                            <label className="block text-gray-700 font-bold mb-2">Name</label>
                            <input onChange={(e) => setName(e.target.value)} type="text" id="name" name="name" className="w-full p-2 border border-gray-300 rounded" placeholder="Enter Students Name" required />
                        </div>
                        <div className="md:flex ">
                            <div className="md:w-1/2 md:mr-4 mb-4">
                                <label className="block text-gray-700 font-bold mb-2">Roll No</label>
                                <input onChange={(e) => setRoll(e.target.value)} type="text" id="rollNo" name="rollNo" className="w-full p-2 border border-gray-300 rounded" placeholder="123456" required />
                            </div>
                            <div className="md:w-1/2 mb-4">
                                <label className="block text-gray-700 font-bold mb-2">Exam</label>

                                <select onChange={(e) => (e.target.value)} name="Regulation" id="Regulation" className="w-full p-2 border border-gray-300 rounded">
                                    <option >Select Examination</option>
                                    <option value="2012">Half Yearly Exam</option>
                                    <option value="2016">Annual Exam</option>
                                    <option value="2022">Model Test Exam</option>
                                </select>

                            </div>
                        </div>
                        <div className="md:flex ">
                            <div className="md:w-1/2 md:mr-4 mb-4">
                                <label className="block text-gray-700 font-bold mb-2">Class</label>

                                <select onChange={(e) => setClass(e.target.value)} name="Class" id="Class" className="w-full p-2 border border-gray-300 rounded">
                                    <option >Select Class</option>

                                    <option value="5">5</option>
                                    <option value="6">6</option>
                                    <option value="7">7</option>
                                    <option value="8">8</option>
                                    <option value="9">9</option>
                                    <option value="10">10</option>

                                </select>

                            </div>
                            <div className="md:w-1/2 mb-4">

                                <label className="block text-gray-700 font-bold mb-2">Shift</label>

                                <select onChange={(e) => setShift(e.target.value)} type="text" id="regNo" name="regNo" className="w-full p-2 border border-gray-300 rounded" placeholder="1234567890" required >

                                    <option >Select Shift</option>
                                    <option value="Morning">Morning</option>
                                    <option value="Day">Day</option>

                                </select>
                            </div>
                        </div>


                    </form>
                </div>

                <div className='w-1/2 md:mx-12'>
                    <h2 className="text-2xl font-bold mb-4">Subject and Marks Input</h2>
                    <div className="space-y-4">
                        <div className="flex flex-col">
                            <label htmlFor="subject" className="mb-2 text-sm">Subject:</label>
                            <input
                                type="text"
                                id="subject"
                                value={subject}
                                onChange={(e) => setSubject(e.target.value)}
                                className="px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-500"
                            />
                        </div>
                        <div className="flex flex-col">
                            <label htmlFor="Total" className="mb-2 text-sm">Marks:</label>
                            <input
                                type="number"
                                id="Total"
                                value={mark}
                                onChange={(e) => setMark(e.target.value)}
                                className="px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-500"
                            />
                        </div>
                        <button
                            type="button"
                            onClick={subPush}
                            className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
                        >
                            Add Subject
                        </button>


                    </div>
                </div>

            </div>


            <table className="w-full table-auto mt-6 text-center mb-5">
                <thead>
                    <tr className='bg-blue-200'>
                        <th className="w-1/3 py-2 border ">Subject</th>
                        <th className="w-1/3 py-2 border">Marks</th>
                        <th className="w-1/3 py-2 border">Action</th>
                    </tr>
                </thead>
                <tbody>

                    {
                        object.map((res, ind) => (
                            <tr key={ind}>
                                <td className="border py-2">{res.subject}</td>
                                <td className="border px-4 py-2">{res.mark}</td>
                                <td onClick={() => Remove(ind)} className="border px-4 py-2 bg-red-600 btn-sm cursor-pointer">Remove</td>
                            </tr>
                        ))
                    }


                </tbody>
            </table>
            <div className="flex w-full items-center text-center mt-3 p-2 md:p-6">

                <div className='w-1/2'>
                    <p className="text-2xl text-blue-700 font-semibold">CGPA : &nbsp;
                        {
                            !noCgpa ? (
                                <>
                                    {cgpa}
                                </>
                            )
                                :
                                <span className=' text-red-500'>
                                    F({noCgpa})
                                </span>
                        }

                    </p>
                </div>
                <div className="w-1/2">
                    <p className="text-2xl text-green-500 font-semibold">Total Marks: {Total}</p>
                </div>

            </div>

            <button onClick={ResultIn} type="submit" className="btn w-full mb-5 bg-blue-500">Submit</button>

        </div>
    );
};

export default InputResult;