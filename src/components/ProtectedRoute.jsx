// ProtectedRoute.jsx
import React from 'react';
import { Navigate } from 'react-router-dom';

// A higher-order component (HOC) to protect routes
const ProtectedRoute = ({ children }) => {
    const token = localStorage.getItem('token'); // Assuming the token is stored in localStorage

    if (!token) {
        return <Navigate to="/authentication/login/cover" />;
    }

    return children;
};

export default ProtectedRoute;
