import React from 'react';
import { Link } from 'react-router-dom';

const AdminToolbar = () => {
    return (
        <div className='h-[50px] w-full flex items-center justify-center'>
            <Link to="/admin">My Admin</Link>
        </div>
    );
};

export default AdminToolbar;