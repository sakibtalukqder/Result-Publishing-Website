import React, { useEffect, useState, useRef } from 'react';
import { useReactToPrint } from 'react-to-print';
import { useParams } from 'react-router-dom';

const baseUrl = 'http://localhost:2021/api'

const Results = () => {

    const { id } = useParams();
    const [Array, setArray] = useState([])

    const getData = async () => {
        const response = await fetch(`${baseUrl}/single/${id}`);
        const result = await response.json();
        if (!response.ok) {
            console.log(result.Error);
        }
        if (response.ok) {
            setArray([result]);
        }
    }

    useEffect(() => {
        getData();
    }, []);

    console.log(Array);


    const Components = useRef();
    const PrintComponent = useReactToPrint({
        content: () => Components.current,
    });

    return (

        <>
            
            <div ref={Components} className="content-print max-w-4xl mx-auto bg-white md:p-8 rounded-lg shadow-lg">

                {
                    Array?.map((res, ind) => (
                        <div key={ind}>
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
                                        <td className="border py-2">Shift : {res.Shift}</td>
                                    </tr>

                                </tbody>
                            </table>


                            <table className="w-full table-auto mt-6 text-center">
                                <thead>
                                    <tr className='bg-blue-200'>
                                        <th className="w-1/2 py-2 border ">Subject</th>
                                        <th className="w-1/2 py-2 border">Marks</th>
                                    </tr>
                                </thead>
                                <tbody>

                                    {
                                        Object.entries(res.Sub).map(([key, value]) => (
                                            <tr key={key}>
                                                <td className="border py-2">{key}</td>
                                                <td className="border px-4 py-2">{value}</td>
                                            </tr>

                                        ))
                                    }

                                </tbody>
                            </table>

                            <div className="flex justify-between items-center mt-3  p-2 md:p-6">
                                <div className="">
                                    <p className="text-2xl text-green-500 font-semibold">Total Marks: {res.Total}</p>
                                </div>
                                <div>
                                    <p className="text-2xl text-blue-700 font-semibold">CGPA : {res.cgpa}</p>
                                </div>
                            </div>
                        </div>
                    ))
                }

            </div >

            <div className='flex justify-center'>
                <button onClick={PrintComponent} className='btn w-full rounded mt-8 bg-blue-300'>Print</button>
            </div>

        </>
    );
};

export default Results;