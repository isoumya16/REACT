import React, { useState } from 'react';
import axios from 'axios';

const Login = ({ history }) => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const { email, password } = formData;

  const onChange = e => setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = async e => {
    e.preventDefault();
    try {
      const res = await axios.post('/api/auth/login', formData);
      localStorage.setItem('token', res.data.token);
      history.push('/dashboard');
    } catch (err) {
      console.error(err.response.data.msg);
    }
  };

  return (
    <form onSubmit={onSubmit}>
      <div>
        <input type="email" name="email" value={email} onChange={onChange} required />
      </div>
      <div>
        <input type="password" name="password" value={password} onChange={onChange} required />
      </div>
      <input type="submit" value="Login" />
    </form>
  );
};

export default Login;
