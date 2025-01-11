import PageHeader from '@/components/shared/pageHeader/PageHeader';
import React from 'react';
import axios from 'axios';
import CreateUserForm from '@/components/users/CreateUserForm';
import topTost from '@/utils/topTost';
import { Link } from 'react-router-dom';
import { FiUsers } from 'react-icons/fi';
import ChatDrawer from '@/components/widgetsStatistics/ChatDrawer';

const CreateUser = () => {
    const url = import.meta.env.VITE_BACKEND_URL || 'http://localhost:2002';

    const handleSubmit = async (formData) => {
        try {
            await axios.post(`${url}/api/users`, formData);
            topTost('success', 'User created successfully');
        } catch (error) {
            console.error('Error creating user:', error);
        }
    };

    return (
        <>
            <PageHeader>
                <div className="d-flex gap-2">
                <Link to="/user-management/manage-user" className="btn btn-primary">
                    <FiUsers size={16} className='me-2' />
                    <span>All Users</span>
                </Link>
                <ChatDrawer />
                </div>
            </PageHeader>
            <div className="main-content">
                <CreateUserForm handleSubmit={handleSubmit} />
            </div>
        </>
    );
};

export default CreateUser;
