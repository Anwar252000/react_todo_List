import React from 'react'
import { Link } from 'react-router-dom'

function Navbar(props) {
    return (
        <>
            <div className="nav flex justify-between items-center px-2 bg-gray-50 shadow-lg fixed w-full z-10 top-0 py-2">
                <div className="brand">
                    <Link className='font-bold' to='/'>{props.title}</Link>
                </div>
                <div className="navItems">
                    <ul className='flex space-x-4'>
                        <li><Link className='group transition duration-300 hover:text-black' to="/">Home <span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-black"></span></Link></li>
                        <li><Link className='group transition duration-300 hover:text-black' to="/about">About <span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-black"></span></Link></li>
                        <li><Link className='group transition duration-300 hover:text-black' to="/contact">Contact <span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-black"></span></Link></li>
                    </ul>
                </div>
                <div className="logInSignUp space-x-2">
                    <button className='btn btn-sm hover:text-white'>LOGIN</button>
                    <button className='btn btn-sm hover:text-white'>SIGN UP</button>
                </div>
            </div>
        </>
    )
}

export default Navbar
