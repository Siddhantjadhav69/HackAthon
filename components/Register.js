// src/components/Register.js
import React, { useState } from 'react';
import { register } from '../services/api';
import { useHistory } from 'react-router-dom';

const Register = () => {
  const [user, setUser] = useState({ username: '', password: '' });
  const history = useHistory();

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await register(user);
    history.push('/login');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="username" value={user.username} onChange={handleChange} placeholder="Username" required />
      <input type="password" name="password" value={user.password} onChange={handleChange} placeholder="Password" required />
      <button type="submit">Register</button>
    </form>
  );
};

export default Register;
