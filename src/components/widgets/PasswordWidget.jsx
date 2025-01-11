import React, { useState } from 'react';
import { FaEye, FaEyeSlash } from 'react-icons/fa';

const PasswordWidget = ({ value, onChange, placeholder = 'Password', required = true, name }) => {
    const [showPassword, setShowPassword] = useState(false);

    const togglePasswordVisibility = () => {
        setShowPassword((prev) => !prev);
    };

    const handleChange = (e) => {
        // Constructing an event-like object with 'name' and 'value'
        if (onChange) {
            onChange({
                target: {
                    name, // Explicitly pass 'name' from props
                    value: e.target.value, // Passing the value from the input
                }
            });
        }
    };

    return (
        <div className="mb-3 position-relative">
            <input
                type={showPassword ? 'text' : 'password'}
                className="form-control"
                placeholder={placeholder}
                value={value}
                onChange={handleChange} // Use the new handleChange
                required={required}
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
    );
};

export default PasswordWidget;
