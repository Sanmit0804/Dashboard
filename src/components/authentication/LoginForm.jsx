import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { CSpinner } from '@coreui/react';
import PasswordWidget from '../widgets/PasswordWidget';

const LoginForm = ({ registerPath, resetPath }) => {
    const [formData, setFormData] = useState({ email: '', password: '' });
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();
    const url = import.meta.env.VITE_BACKEND_URL || 'http://localhost:2002';

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');
        setLoading(true);

        try {
            const response = await fetch(`${url}/api/users/login`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ email: formData.email, password: formData.password }),
            });

            const data = await response.json();
            localStorage.setItem('token', data.token);

            if (response.ok) {
                navigate('/');
            } else {
                setError(data.message || 'Login failed. Please try again.');
            }
        } catch (err) {
            setError('Login failed. Please enter valid credentials.');
        } finally {
            setLoading(false);
        }
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    return (
        <>
            <h2 className="fs-20 fw-bolder mb-4">Login</h2>
            <form className="w-100 mt-4 pt-2" onSubmit={handleSubmit}>
                <div className="mb-4">
                    <input
                        type="email"
                        className="form-control"
                        placeholder="Email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                    />
                </div>
                <PasswordWidget
                    name="password" // Pass 'name' for proper handling
                    value={formData.password}
                    onChange={handleChange}
                    placeholder="Password"
                    required={true}
                />
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
                        className="btn btn-lg btn-primary w-100"
                        disabled={loading}
                    >
                        {loading ? <CSpinner color="white" size="sm" /> : 'Login'}
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
