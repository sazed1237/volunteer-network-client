import React from 'react';
import { Outlet } from 'react-router-dom';
import AdminHeader from '../Pages/Admin/AdminHeader';
const AdminLayout = () => {
    return (
        <div className='container m-auto'>
            <AdminHeader></AdminHeader>
             <Outlet></Outlet>
        </div>
    );
};

export default AdminLayout;