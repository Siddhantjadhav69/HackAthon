// src/components/Login.js
import React, { useState } from 'react';
import { login } from '../services/api';
import { useHistory } from 'react-router-dom';

const Login = ({ setToken }) => {
  const [user, setUser] = useState({ username: '', password: '' });
  const history = useHistory();

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await login(user);
    setToken(response.data.token);
    history.push('/');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="username" value={user.username} onChange={handleChange} placeholder="Username" required />
      <input type="password" name="password" value={user.password} onChange={handleChange} placeholder="Password" required />
      <button type="submit">Login</button>
    </form>
  );
};

export default Login;
