
import React, { useState } from 'react';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    
    console.log(`Email: ${email}, Password: ${password}`); 

  };

  return (
    <>
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <label>Email</label>
        <input type="email" value={email} name="email" onChange={(e) => setEmail(e.target.value)} />

        <label>Password</label>
        <input type="password" value={password} name="password" onChange={(e) => setPassword(e.target.value)} />

        <button type="submit">Login</button>
      </form>
    </>
  );
}

export default Login;
