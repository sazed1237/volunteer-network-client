import React, { useContext } from 'react';
import logo from '../../../assets/logos/Group 1329.png';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../providers/AuthProvider';

const NavBar = () => {

    const { user, logOut } = useContext(AuthContext)

    const handleLogOut = () => {
        logOut()
            .then(() => {
                
            })
            .catch(error => console.log(error))
    }

    const navItems = <>
        <li><Link to={'/'}>Home</Link></li>
        <li><Link to={'/donation'}>Donation</Link></li>
        <li><Link to={'/events'}>Events</Link></li>
        <li><Link to={'/blog'}>Blog</Link></li>

        {
            user?.email ?
                <>
                    <li><Link to={'/user-specific-reg'}>My Events</Link></li>
                    <li><button onClick={handleLogOut}>Log Out</button></li>
                </>
                :
                <li><Link to={'/login'}>Login</Link></li>

        }

    </>


    return (
        <div className="navbar bg-base-100">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </div>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        {navItems}
                    </ul>
                </div>
                <Link to={'/'}>
                    <img className='w-5/12' src={logo} alt="" />
                </Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {navItems}
                </ul>
            </div>
            <div className="navbar-end">
                <Link to={'/singup'} className='mr-3  '>
                    <button className=' px-6 py-1 text-white rounded-md bg-[#3F90FC]'>Register</button>
                </Link>
                <Link to={'/admin'}>
                    <button className=' px-6 py-1 text-white rounded-md bg-[#434141]'>Admin</button>
                </Link>
            </div>
        </div>
    );
};

export default NavBar;