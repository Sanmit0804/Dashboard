import React, { useState } from 'react';
import { FiFacebook, FiGithub, FiTwitter } from 'react-icons/fi';
import { Link, useNavigate } from 'react-router-dom';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { CSpinner } from '@coreui/react';

const LoginForm = ({ registerPath, resetPath }) => {
    const [showPassword, setShowPassword] = useState(false);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false); // Add loading state
    const navigate = useNavigate();
    const url = import.meta.env.VITE_BACKEND_URL;

    const togglePasswordVisibility = () => {
        setShowPassword((prev) => !prev);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError(''); // Clear any previous error messages
        setLoading(true); // Set loading to true when submitting the form

        try {
            const response = await fetch(`${url}/api/user/login`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ email, password }),
            });

            const data = await response.json();
            localStorage.setItem('token', data.token); // Store token in localStorage

            if (response.ok) {
                // If login is successful, navigate to the home page
                navigate('/');
            } else {
                // Handle errors returned by the server
                setError(data.message || 'Login failed. Please try again.');
            }
        } catch (err) {
            setError('Login failed. Please enter valid credentials.');
        } finally {
            setLoading(false); // Reset loading state when done
        }
    };

    return (
        <>
            <h2 className="fs-20 fw-bolder mb-4">Login</h2>
            <h4 className="fs-13 fw-bold mb-2">Login to your account</h4>
            <p className="fs-12 fw-medium text-muted">
                Please enter your credentials to access our personalized recommendations for you.
            </p>
            <form className="w-100 mt-4 pt-2">
                <div className="mb-4">
                    <input
                        type="email"
                        className="form-control"
                        placeholder="Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                </div>
                <div className="mb-3 position-relative">
                    <input
                        type={showPassword ? 'text' : 'password'}
                        className="form-control"
                        placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                    <span
                        className="position-absolute"
                        style={{
                            top: '50%',
                            right: '15px',
                            transform: 'translateY(-50%)',
                            cursor: 'pointer',
                        }}
                        onClick={togglePasswordVisibility}
                    >
                        {showPassword ? <FaEye /> : <FaEyeSlash />}
                    </span>
                </div>
                {error && <div className="text-danger mb-3">{error}</div>}
                <div className="d-flex align-items-center justify-content-between">
                    <div>
                        <Link to={resetPath} className="fs-11 text-primary">
                            Forget password?
                        </Link>
                    </div>
                </div>
                <div className="mt-5">
                    <button 
                        type="submit" 
                        onClick={handleSubmit} 
                        className="btn btn-lg btn-primary w-100" 
                        disabled={loading} // Disable button while loading
                    >
                        {loading ? (
                            <CSpinner color='white' size='sm' />
                        ) : (
                            'Login'
                        )}
                    </button>
                </div>
            </form>
            <div className="mt-2 text-muted">
                <span> Don't have an account?</span>
                <Link to={registerPath} className="fw-bold">
                    {' '}
                    Create an Account
                </Link>
            </div>
        </>
    );
};

export default LoginForm;
