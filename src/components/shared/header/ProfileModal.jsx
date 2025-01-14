import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import the useNavigate hook
import { FiActivity, FiBell, FiChevronRight, FiDollarSign, FiLogOut, FiSettings, FiUser } from "react-icons/fi";
import { IoIosSwap } from "react-icons/io";

const activePosition = ["Active", "Always", "Bussy", "Inactive", "Disabled", "Cutomization"];
const subscriptionsList = ["Plan", "Billings", "Referrals", "Payments", "Statements", "Subscriptions"];
const url = import.meta.env.VITE_BACKEND_URL || 'http://localhost:2002'; 

const ProfileModal = () => {
    const navigate = useNavigate();
    const [user, setUser] = useState(null); // State to store user data

    // Fetch current user details
    useEffect(() => {
        const fetchCurrentUser = async () => {
            try {
                const response = await fetch(`${url}/api/users/current`, {
                    method: 'GET',
                    headers: {
                        Authorization: `Bearer ${localStorage.getItem('token')}`, // Include token in headers
                    },
                });
                const data = await response.json();
                if (response.ok) {
                    setUser(data); // Set fetched user data
                } else {
                    console.error(data.error || 'Failed to fetch user');
                }
            } catch (error) {
                console.error('Error fetching user:', error);
            }
        };
        fetchCurrentUser();
    }, []);

    const handleLogout = () => {
        localStorage.removeItem('token');
        navigate('/authentication/login/cover');
    };

    return (
        <div className="dropdown nxl-h-item">
            <a href="#" data-bs-toggle="dropdown" role="button" data-bs-auto-close="outside">
                <img src="/images/avatar/user.png" alt="user-image" className="img-fluid user-avtar me-0" />
            </a>
            <div className="dropdown-menu dropdown-menu-end nxl-h-dropdown nxl-user-dropdown">
                <div className="dropdown-header">
                    <div className="d-flex align-items-center">
                        <img src="/images/avatar/user.png" alt="user-image" className="img-fluid user-avtar" />
                        <div>
                            <h6 className="text-dark mb-0">
                                {user ? `${user.firstName} ${user.lastName} ` : 'Loading...'} {/* Display user's name */}
                                <span className={`badge bg-soft-${user?.role === 'admin' ? 'success' : user?.role === 'manager' ? 'warning' : 'primary'} text-${user?.role === 'admin' ? 'success' : user?.role === 'manager' ? 'warning' : 'primary'} text-success ms-1`}>{user?.role?.charAt(0).toUpperCase() + user?.role?.slice(1)}</span>
                            </h6>
                            <span className="fs-12 fw-medium text-muted">{user ? user.email : 'Fetching...'}</span> {/* Display user's email */}
                        </div>
                    </div>
                </div>
                <div className="dropdown">
                    <a href="#" className="dropdown-item" data-bs-toggle="dropdown">
                        <span className="hstack">
                            <i className="wd-10 ht-10 border border-2 border-gray-1 bg-success rounded-circle me-2"></i>
                            <span>Active</span>
                        </span>
                        <i className="ms-auto me-0"><FiChevronRight /></i>
                    </a>
                    <div className="dropdown-menu user-active">
                        {activePosition.map((item, index) => (
                            <div key={index}>
                                {index === activePosition.length - 1 && <div className="dropdown-divider"></div>}
                                <a href="#" className="dropdown-item">
                                    <span className="hstack">
                                        <i className={`wd-10 ht-10 border border-2 border-gray-1 rounded-circle me-2 ${getColor(item)}`}></i>
                                        <span>{item}</span>
                                    </span>
                                </a>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="dropdown-divider"></div>
                <div className="dropdown">
                    <a href="#" className="dropdown-item" data-bs-toggle="dropdown">
                        <span className="hstack">
                            <i className="me-2"><FiDollarSign /></i>
                            <span>Subscriptions</span>
                        </span>
                        <i className="ms-auto me-0"><FiChevronRight /></i>
                    </a>
                    <div className="dropdown-menu">
                        {subscriptionsList.map((item, index) => (
                            <div key={index}>
                                {index === activePosition.length - 1 && <div className="dropdown-divider"></div>}
                                <a href="#" className="dropdown-item">
                                    <span className="hstack">
                                        <i className="wd-5 ht-5 bg-gray-500 rounded-circle me-3"></i>
                                        <span>{item}</span>
                                    </span>
                                </a>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="dropdown-divider"></div>
                <a href="#" className="dropdown-item">
                    <i><IoIosSwap /></i>
                    <span>Admin Mode</span>
                </a>
                <a href="#" className="dropdown-item">
                    <i><FiUser /></i>
                    <span>Profile Details</span>
                </a>
                <a href="#" className="dropdown-item">
                    <i><FiActivity /></i>
                    <span>Activity Feed</span>
                </a>
                <a href="#" className="dropdown-item">
                    <i><FiDollarSign /></i>
                    <span>Billing Details</span>
                </a>
                <a href="#" className="dropdown-item">
                    <i><FiBell /></i>
                    <span>Notifications</span>
                </a>
                <a href="#" className="dropdown-item">
                    <i><FiSettings /></i>
                    <span>Account Settings</span>
                </a>
                <div className="dropdown-divider"></div>
                <a href="#" className="dropdown-item" onClick={handleLogout}> {/* Add onClick to logout */}
                    <i><FiLogOut /></i>
                    <span>Logout</span>
                </a>
            </div>
        </div>
    );
};

export default ProfileModal;

const getColor = (item) => {
    switch (item) {
        case "Always":
            return "always_clr";
        case "Bussy":
            return "bussy_clr";
        case "Inactive":
            return "inactive_clr";
        case "Disabled":
            return "disabled_clr";
        case "Cutomization":
            return "cutomization_clr";
        default:
            return "active-clr";
    }
};
