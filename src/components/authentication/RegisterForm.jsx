import React, { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { RiKey2Fill } from "react-icons/ri";
import { Link, Navigate } from "react-router-dom";
import zxcvbn from 'zxcvbn'; // Import zxcvbn for password strength checking
import axios from 'axios'; // Import axios for API requests
import { useNavigate } from 'react-router-dom';


const RegisterForm = ({ path }) => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [strength, setStrength] = useState(0);
  const [error, setError] = useState(""); // Error message state
  const [loading, setLoading] = useState(false); // Loading state for form submission
  const url = import.meta.env.VITE_BACKEND_URL;

  const navigate = useNavigate(); 


  // Function to toggle password visibility
  const togglePasswordVisibility = () => {
    setShowPassword((prev) => !prev);
  };

  // Function to generate a random strong password
  const generatePassword = () => {
    const characters =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()";
    const passwordLength = 12;
    let randomPassword = "";
    for (let i = 0; i < passwordLength; i++) {
      randomPassword += characters.charAt(
        Math.floor(Math.random() * characters.length)
      );
    }
    setPassword(randomPassword);
    evaluatePasswordStrength(randomPassword);
  };

  // Function to evaluate password strength using zxcvbn
  const evaluatePasswordStrength = (pass) => {
    const result = zxcvbn(pass);
    setStrength(result.score); // zxcvbn returns a score between 0 and 4
  };

  const handlePasswordChange = (e) => {
    const newPassword = e.target.value;
    setPassword(newPassword);
    evaluatePasswordStrength(newPassword);
  };

  const handleConfirmPasswordChange = (e) => {
    setConfirmPassword(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    // Basic validation for password match
    if (password !== confirmPassword) {
      setError("Passwords do not match");
      return;
    }
  
    // Reset error message if validation passes
    setError("");
  
    try {
      setLoading(true);
  
      // API call to register the user
      const response = await axios.post(`${url}/api/user/register`, {
        firstName,
        lastName,
        email,
        password,
      });
  
      navigate('/authentication/login/cover'); 
    } catch (error) {
      const errorMessage = error.response?.data?.error || "Registration failed. Please try again.";
      setError(errorMessage);
    } finally {
      setLoading(false);
    }
  };
  

  return (
    <>
      <h2 className="fs-20 fw-bolder mb-4">Register</h2>
      <p className="fs-12 fw-medium text-muted">
        Let's get you all set up, so you can verify your personal account and begin setting up your profile.
      </p>
      <form onSubmit={handleSubmit} className="w-100 mt-4 pt-2">
        <div className="mb-4">
          <input
            type="text"
            className="form-control"
            placeholder="First Name"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            required
          />
        </div>
        <div className="mb-4">
          <input
            type="text"
            className="form-control"
            placeholder="Last Name"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            required
          />
        </div>
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
        <div className="mb-4 generate-pass">
          <div className="input-group field">
            <input
              type={showPassword ? "text" : "password"}
              className="form-control password"
              id="newPassword"
              placeholder="Password"
              value={password}
              onChange={handlePasswordChange}
              required
            />
            <div
              className="input-group-text c-pointer gen-pass opacity-75"
              data-bs-toggle="tooltip"
              title="Generate Password"
              onClick={generatePassword}
            >
              <RiKey2Fill size={16} />
            </div>
            <div
              className="input-group-text border-start bg-gray-2 c-pointer opacity-75"
              data-bs-toggle="tooltip"
              title="Show/Hide Password"
              onClick={togglePasswordVisibility}
            >
              {showPassword ? <FaEye size={16} /> : <FaEyeSlash size={16} />}
            </div>
          </div>
          {/* Password Strength Meter */}
          <div className="progress-bar mt-2 d-flex gap-1">
            {[...Array(4)].map((_, i) => (
              <div
                key={i}
                className="progress-bar-segment"
                style={{
                  flex: 1,
                  height: "8px",
                  backgroundColor:
                    i < strength
                      ? ["red", "orange", "lightgreen", "green"][strength - 1]
                      : "lightgray",
                }}
              ></div>
            ))}
          </div>
        </div>
        <div className="mb-4">
          <input
            type="password"
            className="form-control"
            placeholder="Password again"
            value={confirmPassword}
            onChange={handleConfirmPasswordChange}
            required
          />
        </div>

        {error && <div className="alert alert-danger">{error}</div>}

        <div className="mt-5">
          <button type="submit" className="btn btn-lg btn-primary w-100" disabled={loading}>
            {loading ? 'Creating Account...' : 'Create Account'}
          </button>
        </div>
      </form>
      <div className="mt-2 text-muted">
        <span>Already have an account?</span>
        <Link to={path} className="fw-bold"> Login</Link>
      </div>
    </>
  );
};

export default RegisterForm;