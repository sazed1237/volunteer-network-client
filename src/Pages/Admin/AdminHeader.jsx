import React from 'react';
import img from "../../assets/logos/Group 1329.png";
import { Link } from 'react-router-dom';

const AdminHeader = () => {
    return (
        <div className='w-1/5'>
            <Link to={'/'}>
                <img src={img} alt="" />
            </Link>
        </div>
    );
};

export default AdminHeader;