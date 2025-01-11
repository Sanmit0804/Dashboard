import PageHeader from '@/components/shared/pageHeader/PageHeader';
import React, { useState } from 'react';
import axios from 'axios';
import CreateUserForm from '@/components/users/CreateUserForm';
import topTost from '@/utils/topTost';

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
            <PageHeader />
            <div className="main-content">
                <CreateUserForm handleSubmit={handleSubmit} />
            </div>
        </>
    );
};

export default CreateUser;
