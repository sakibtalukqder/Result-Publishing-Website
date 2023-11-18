import React from 'react';
import { Link, NavLink } from 'react-router-dom';

const Navbar = () => {


    const user = localStorage.getItem('User');

    const menu = <>
        <li className='px-4'><NavLink to={"/"}>Home</NavLink></li>
        <li className='px-4'><NavLink to={"/search"}>Results</NavLink></li>
        <li className='px-4'><NavLink to={"/about"}>About Us</NavLink></li>
    </>

    return (
        <div className='z-[100]'>
            <div className="navbar bg-base-100">
                <div className="flex-1">
                    <Link to={'/'} className="btn btn-ghost normal-case text-xl">Frienemie</Link>
                </div>
                <div className="flex-none">
                    <ul className=" menu-horizontal px-1">
                        <div className='lg:flex hidden'>
                            {menu}
                        </div>
                        <li className='block lg:hidden'><label htmlFor="my-drawer-4" className="drawer-button border"><svg className="swap-off fill-current" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 512 512"><path d="M64,384H448V341.33H64Zm0-106.67H448V234.67H64ZM64,128v42.67H448V128Z" /></svg></label></li>
                    </ul>
                </div>
            </div>
            <hr />

            {/* Small Screen  */}
            <div className="drawer drawer-end">
                <input id="my-drawer-4" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content">
                    {/* Page content here */}
                </div>
                <div className="drawer-side z-[100]">
                    <label htmlFor="my-drawer-4" aria-label="close sidebar" className="drawer-overlay"></label>
                    <ul className=" leading-8 p-4 w-1/2 min-h-full bg-slate-900 text-white  ">
                        {/* Sidebar content here */}
                        <li className=' justify-end flex w-8 pb-6 float-right'>
                            <label htmlFor="my-drawer-4" aria-label="close sidebar" className=' border p-2 rounded-lg' ><svg className="swap-on fill-current" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 512 512"><polygon points="400 145.49 366.51 112 256 222.51 145.49 112 112 145.49 222.51 256 112 366.51 145.49 400 256 289.49 366.51 400 400 366.51 289.49 256 400 145.49" /></svg></label>
                        </li>
                        <br />
                        {menu}
                    </ul>
                </div>
            </div>

            <br />

        </div>
    );
};

export default Navbar;
