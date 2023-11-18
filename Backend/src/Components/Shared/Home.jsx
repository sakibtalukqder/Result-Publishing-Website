import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div className='flex items-center justify-center flex-col my-12 mb-16'>
            <h1 className=' text-4xl font-bold text-center'>Home Components</h1>
            <Link className='btn my-4 btn-primary' to={'/dashboard'}>Get Started</Link>
        </div>
    );
};

export default Home;