import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Register = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    role: 'doctor', // Default to 'doctor'; can be changed to 'patient'
  });

  const { name, email, password, role } = formData;
  const navigate = useNavigate();

  const onChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post('/api/auth/register', formData);
      localStorage.setItem('token', res.data.token);
      if (role === 'doctor') {
        navigate.push('/doctor-dashboard');
      } else {
        navigate.push('/patient-dashboard');
      }
    } catch (err) {
      console.error(err.response.data.msg);
    }
  };

  return (
    <form onSubmit={onSubmit}>
      <h2>Register</h2>
      <div>
        <input
          type="text"
          name="name"
          value={name}
          onChange={onChange}
          placeholder="Name"
          required
        />
      </div>
      <div>
        <input
          type="email"
          name="email"
          value={email}
          onChange={onChange}
          placeholder="Email"
          required
        />
      </div>
      <div>
        <input
          type="password"
          name="password"
          value={password}
          onChange={onChange}
          placeholder="Password"
          required
        />
      </div>
      <div>
        <select name="role" value={role} onChange={onChange}>
          <option value="doctor">Doctor</option>
          <option value="patient">Patient</option>
        </select>
      </div>
      <input type="submit" value="Register" />
    </form>
  );
};

export default Register;
