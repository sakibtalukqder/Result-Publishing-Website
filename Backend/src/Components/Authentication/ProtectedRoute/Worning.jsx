import React from 'react';

const Worning = () => {
    const Data = localStorage.getItem('User')
    const User = JSON.parse(Data);
    const Name = User.FullName;
    return (
        <div className='mx-auto'>

            <div className=' bg-green-100 md:p-12 p-8 shadow-2xl gap-3 grid'>
                <h1 className='font-bold text-4xl'>Your Accounts Needs to be Approved</h1>
                <p className='text-md'>Hellow, <span className="underline">{Name}</span> <br /> Your Information has received to our team, We just needs to varify you,
                    We will try to approve your account as soon as possible </p>
                <h1 className='font-bold text-xl underline text-red-500'> You cannot access the admin page before the approval ..... !! </h1>
                <h1 className='font-bold text-xl '> Thank you </h1>
            </div>

        </div>
    );
};

export default Worning;