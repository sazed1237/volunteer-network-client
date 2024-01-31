import React from 'react';
import users from '../../../assets/logos/users-alt 1.png';
import plus from '../../../assets/logos/plus 1.png';
import { Link } from 'react-router-dom';
const LeftSideBar = () => {
    return (
        <div>
            <div className='flex items-center mt-7'>
                <Link to={'/admin/registerallevents'} className='flex'>
                    <img className='w-7 mr-2 ' src={users} alt="" />
                    <h4>volunteer Register List</h4>
                </Link>
            </div>
            <div className='flex items-center mt-7'>
                <Link to={"/admin/addevent"} className='flex'>
                    <img className='w-7 mr-2 ' src={plus} alt="" />
                    <h4>Add Event</h4>
                </Link>
            </div>
        </div>
    );
};

export default LeftSideBar;