import React, { useState } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';

function RegisterForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const [message, setMessage] = useState('');
  const [error, setError] = useState('');

  // Handle input change
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
    setMessage('');
    setError('');
  };

  // Validate form
  const validate = () => {
    const { name, email, password, confirmPassword } = formData;
    if (!name || !email || !password || !confirmPassword) {
      setError('All fields are required.');
      return false;
    }
    if (!email.includes('@')) {
      setError('Enter a valid email address.');
      return false;
    }
    if (password.length < 6) {
      setError('Password must be at least 6 characters.');
      return false;
    }
    if (password !== confirmPassword) {
      setError('Passwords do not match.');
      return false;
    }
    return true;
  };

  // Handle form submit
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) return;

    try {
      const response = await axios.post('http://localhost:8080/api/register', {
        name: formData.name,
        email: formData.email,
        password: formData.password,
      });

      if (response.status === 200 || response.status === 201) {
        setMessage('✅ Registration successful!');
        setFormData({ name: '', email: '', password: '', confirmPassword: '' });
      }
    } catch (err) {
      setError('❌ Registration failed. Try again.');
    }
  };

  return (
    <div className="d-flex justify-content-center align-items-center vh-100 bg-light">
      <div className="card p-4 shadow" style={{ width: '400px', borderRadius: '16px' }}>
        <h3 className="text-center mb-4 text-success">Create Account</h3>

        <form onSubmit={handleSubmit}>
          <div className="form-group mb-3">
            <label className="form-label fw-semibold">Name</label>
            <input
              type="text"
              className="form-control"
              placeholder="Enter full name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group mb-3">
            <label className="form-label fw-semibold">Email</label>
            <input
              type="email"
              className="form-control"
              placeholder="Enter email address"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group mb-3">
            <label className="form-label fw-semibold">Password</label>
            <input
              type="password"
              className="form-control"
              placeholder="Create password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group mb-4">
            <label className="form-label fw-semibold">Confirm Password</label>
            <input
              type="password"
              className="form-control"
              placeholder="Re-enter password"
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleChange}
              required
            />
          </div>

          <button type="submit" className="btn btn-success w-100">
            Register
          </button>
        </form>

        {error && (
          <div className="alert alert-danger mt-3 text-center p-2">{error}</div>
        )}
        {message && (
          <div className="alert alert-success mt-3 text-center p-2">{message}</div>
        )}
      </div>
    </div>
  );
}

export default RegisterForm;