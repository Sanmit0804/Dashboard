import React, { useState } from 'react';
import { FiFacebook, FiGithub, FiTwitter } from 'react-icons/fi';
import { Link, useNavigate } from 'react-router-dom';
import { FaEye, FaEyeSlash } from 'react-icons/fa';

const LoginForm = ({ registerPath, resetPath }) => {
    const [showPassword, setShowPassword] = useState(false);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const togglePasswordVisibility = () => {
        setShowPassword((prev) => !prev);
    };

    const handleSubmit = async (e) => {
        console.log("handlesubmit clicked")
        e.preventDefault();
        setError(''); // Clear any previous error messages

        try {
            const response = await fetch('http://localhost:2002/api/user/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ email, password }),
            });

            const data = await response.json();
            console.log("data---",data);

            if (response.ok) {
                // If login is successful, navigate to the home page
                navigate('/');
            } else {
                // Handle errors returned by the server
                setError(data.message || 'Login failed. Please try again.');
            }
        } catch (err) {
            setError('Login failed. Please enter valid credentials.');
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
                    <button type="submit" onClick={handleSubmit} className="btn btn-lg btn-primary w-100" >
                        Login
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
