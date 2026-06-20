import React, { useState } from "react";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";
import "../App.css";

export default function Register({ onLoginClick }) {
  const [formData, setFormData] = useState({
    employeeName: "",
    employeeId: "",
    email: "",
    department: "",
    password: "",
    confirmPassword: "",
  });

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      alert("Passwords do not match!");
      return;
    }
    console.log("Registration submitted:", formData);
    // TODO: Connect to backend API
  };

  return (
    <div className="register-card">
      <h2>Register</h2>
      <form onSubmit={handleSubmit}>
        <label>Employee Name</label>
        <input
          type="text"
          name="employeeName"
          placeholder="Enter your full name"
          value={formData.employeeName}
          onChange={handleChange}
          required
        />

        <label>Employee ID</label>
        <input
          type="text"
          name="employeeId"
          placeholder="Enter your employee ID"
          value={formData.employeeId}
          onChange={handleChange}
          required
        />

        <label>Email</label>
        <input
          type="email"
          name="email"
          placeholder="Enter your email address"
          value={formData.email}
          onChange={handleChange}
          required
        />

        <label>Department</label>
        <select
          name="department"
          value={formData.department}
          onChange={handleChange}
          required
        >
          <option value="">Select your department</option>
          <option value="IT">IT</option>
          <option value="HR">HR</option>
          <option value="Finance">Finance</option>
        </select>

        <label>Password</label>
        <div className="password-input-container">
          <input
            type={showPassword ? "text" : "password"}
            name="password"
            placeholder="Enter your password"
            value={formData.password}
            onChange={handleChange}
            required
          />
          <button
            type="button"
            className="password-toggle-btn"
            onClick={() => setShowPassword(!showPassword)}
            aria-label={showPassword ? "Hide password" : "Show password"}
          >
            {showPassword ? <FaRegEyeSlash /> : <FaRegEye />}
          </button>
        </div>

        <label>Confirm Password</label>
        <div className="password-input-container">
          <input
            type={showConfirmPassword ? "text" : "password"}
            name="confirmPassword"
            placeholder="Confirm your password"
            value={formData.confirmPassword}
            onChange={handleChange}
            required
          />
          <button
            type="button"
            className="password-toggle-btn"
            onClick={() => setShowConfirmPassword(!showConfirmPassword)}
            aria-label={showConfirmPassword ? "Hide password" : "Show password"}
          >
            {showConfirmPassword ? <FaRegEyeSlash /> : <FaRegEye />}
          </button>
        </div>

        <button type="submit" className="submit-btn">Register</button>
        <div className="links">
          Already have an account?{" "}
          <a
            href="/login"
            onClick={(e) => {
              e.preventDefault();
              onLoginClick();
            }}
          >
            Login here
          </a>
        </div>
      </form>
    </div>
  );
}
