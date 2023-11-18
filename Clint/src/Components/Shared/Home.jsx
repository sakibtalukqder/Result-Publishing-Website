import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div className="flex flex-col items-center justify-center w-full lg:flex-row md:py-32">
            <div className="md:w-1/2 md:mx-9 hidden md:flex flex-col">
                <h1 className="text-5xl font-bold">Welcome to <br /> Frienemie !</h1>
                <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>

            </div>
            <div className="md:w-1/2 md:mx-9">
                <div className="mockup-browser border border-base-300 hidden md:block">
                    <div className="mockup-browser-toolbar">
                        <div className="input border border-base-300">https://frienemie.netlify.app</div>
                    </div>
                    <div className="flex flex-col justify-center items-center px-4 py-16 border-t border-base-300">
                        <div className='flex justify-center items-center '>
                            <span className="loading loading-infinity loading-lg"></span> &nbsp; Search
                        </div>
                        <Link to={"/search"} className="btn btn-primary my-8">Get Started</Link>
                    </div>
                </div>
                <div className="mockup-phone md:hidden">
                    <div className="camera"></div>
                    <div className="display">

                        <div className="artboard artboard-demo phone-1">
                            <div className='flex flex-col justify-center items-center w-[90%]'>
                                <h1 className="text-5xl font-bold">Welcome to <br /> Frienemie !</h1>
                                <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                            </div>
                            <Link to={"/search"} className="btn btn-primary my-8">Get Started</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;