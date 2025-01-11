import React, { useEffect, useState } from 'react';
import axios from 'axios';
import CustomUsersList from '@/components/widgetsTables/CustomUsersList';
import topTost from '@/utils/topTost';
import PageHeader from '@/components/shared/pageHeader/PageHeader';
import SelectDropdown from '@/components/shared/SelectDropdown';
import ChatDrawer from '@/components/widgetsStatistics/ChatDrawer';
import { Link } from 'react-router-dom';
import { FiUserPlus } from 'react-icons/fi';

const AdminDashboard = () => {
    const [users, setUsers] = useState([]);
    const [formData, setFormData] = useState({ firstName: '', lastName: '', email: '', password: '', role: '' });
    const [editId, setEditId] = useState(null);
    const [showModal, setShowModal] = useState(false); // State for controlling modal visibility
    const url = import.meta.env.VITE_BACKEND_URL || 'http://localhost:2002';

    // Fetch all users
    const fetchUsers = async () => {
        try {
            const response = await axios.get(`${url}/api/users`);
            console.log('Users:', response.data);
            setUsers(response.data);
        } catch (error) {
            console.error('Error fetching users:', error);
        }
    };

    // Create or update user
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            if (editId) {
                await axios.put(`${url}/api/users/${editId}`, formData);
            } else {
                await axios.post(`${url}/api/users`, formData);
            }
            setFormData({ firstName: '', lastName: '', email: '', password: '', role: '' });
            setEditId(null);
            fetchUsers();
            setShowModal(false); // Close the modal after submit
            topTost('success', 'User update successfully');
        } catch (error) {
            console.error('Error saving user:', error);
        }
    };

    // Delete user
    const handleUserDelete = async (id) => {
        try {
            await axios.delete(`${url}/api/users/${id}`);
            fetchUsers();
            topTost('success', 'User deleted successfully');
        } catch (error) {
            console.error('Error deleting user:', error);
        }
    };

    // Handle form input changes
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    // Handle role selection change
    const handleSelectChange = (selectedOption) => {
        setFormData({ ...formData, role: selectedOption.value });
    };

    // Handle edit
    const handleUserEdit = (user) => {
        setFormData(user);
        setEditId(user._id);
        setShowModal(true); // Show the modal when editing
    };

    // Close modal
    const closeModal = () => {
        setShowModal(false); // Close the modal
        setFormData({ firstName: '', lastName: '', email: '', password: '', role: '' });
        setEditId(null);
    };

    useEffect(() => {
        fetchUsers();
    }, []);

    const samplePrompts = [
        "Show all users with the role of Manager.",
        "Update user role to Admin for user John Doe.",
        "Display all users who are Admins.",
        "How do I create a new user?"
    ];
    
    return (
        <>
            <PageHeader>
                <div className="d-flex gap-2">
                <Link to="/user-management/create-user" className="btn btn-primary">
                    <FiUserPlus size={16} className='me-2' />
                    <span>Create User</span>
                </Link>
                <ChatDrawer samplePrompts={samplePrompts}/>
                </div>
            </PageHeader>
            <div className={`main-content ${showModal ? 'modal-open' : ''}`}>
                {/* Users List */}
                <CustomUsersList title={'Users'} usersData={users} handleUserDelete={handleUserDelete} handleUserEdit={handleUserEdit} />

                {/* Modal for Edit User */}
                {showModal && (
                    <div className="modal fade show d-block " role="dialog" aria-labelledby="editModalLabel" aria-hidden="false">
                        <div className="modal-dialog" role="document">
                            <div className="modal-content">
                                <div className="modal-header">
                                    <h5 className="modal-title" id="editModalLabel">{editId ? 'Edit' : 'Create'} User</h5>
                                </div>
                                <form onSubmit={handleSubmit}>
                                    <div className="modal-body">
                                        <input
                                            type="text"
                                            name="firstName"
                                            placeholder="First Name"
                                            value={formData.firstName}
                                            onChange={handleChange}
                                            className="form-control mb-2"
                                            required
                                        />
                                        <input
                                            type="text"
                                            name="lastName"
                                            placeholder="Last Name"
                                            value={formData.lastName}
                                            onChange={handleChange}
                                            className="form-control mb-2"
                                            required
                                        />
                                        <input
                                            type="email"
                                            name="email"
                                            placeholder="Email"
                                            value={formData.email}
                                            onChange={handleChange}
                                            className="form-control mb-2"
                                            required
                                        />
                                        <SelectDropdown
                                            options={[
                                                { value: 'admin', label: 'Admin', icon: "feather-at-sign" },
                                                { value: 'manager', label: 'Manager', icon: "feather-users" },
                                            ]}
                                            defaultSelect={formData.role}
                                            onSelectOption={handleSelectChange} // Updated handler
                                            searchAvailable={false}
                                        />
                                    </div>
                                    <div className="modal-footer">
                                        <button type="button" className="btn btn-secondary" onClick={closeModal}>Close</button>
                                        <button type="submit" className="btn btn-primary">{editId ? 'Update' : 'Create'} User</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </>
    );
};

export default AdminDashboard;
