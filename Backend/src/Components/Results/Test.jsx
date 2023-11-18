import React, { useState } from 'react';

const Test = () => {

    const [Array, setArray] = useState([]);
    const [Key, setKey] = useState();
    const [Value, setValue] = useState();


    const handleClick = () => {
        const Data = {
            Key, Value,
        }
        setArray([...Array, Data]);
    }

    const Remove = (ind) => {
        console.log(ind);
        const newArray = [...Array];
        newArray.splice(ind, 1); // Remove the item at the specified index
        setArray(newArray);
    }

    const Obj = Array.reduce((object, items) => {
        object[items.Key] = items.Value
        return object
    }, {})

    console.log(Obj);


    return (
        <div>


            <div className='flex flex-col justify-center items-center'>
                <div className='flex items-center flex-wrap justify-center gap-1 my-4'>
                    <input type="text" value={Key} onChange={(e) => setKey(e.target.value)} className='border bg-slate-400 shadow-2xl h-11 px-2' />
                    <input type="text" value={Value} onChange={(e) => setValue(e.target.value)} className='border bg-slate-400 shadow-2xl h-11 px-2' />
                </div>
                <button onClick={handleClick} className='btn bg-blue-600 mb-5'>Add me</button>
            </div>

            <div className='flex flex-col w-100 text-center my-4'>

                <div className='flex'>
                    <div className='w-2/3 border p-1'>key</div>
                    <div className='w-2/3 border p-1'>value</div>
                    <div className='w-1/3 border p-1'></div>
                </div>
                {
                    Object.entries(Obj).map(([key, value], index) => (
                        <div className='flex'>
                            <div className='w-2/3 border p-1'>{key}</div>
                            <div className='w-2/3 border p-1'>{value}</div>
                            <button onClick={() => Remove(index)} className='w-1/3 border p-1 bg-red-600 btn-sm'>Remove</button>
                        </div>
                    ))
                }

            </div>
            <br />
        </div>
    );
};

export default Test;