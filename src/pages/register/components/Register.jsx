import React, { useState } from 'react';
import axios from 'axios';

function Register() {
  const [user, setUser] = useState({
    userName: '',
    email: '',
    password: '',
    image: '',
  });
  const handleImageChange=(e)=>{
    const { name, value } = e.target;
    setUser({
      ...user,
      [name]:value
    });
  };

  const handleTextInputChange = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };
  

  async function handleSubmit(e) {
    e.preventDefault();
    const formData = new FormData();
    formData.append('userName', user.userName);
    formData.append('email', user.email);
    formData.append('password', user.password);
    formData.append('image', user.image);
    const { data } = await axios.post(`${import.meta.env.VITE_API}/auth/signUP`, formData);

    console.log(data);
  }

  return <>
    <h2>Register </h2>
    <form onSubmit={handleSubmit}>
      <label>User name</label>
      <input type="text" value={user.userName} name="userName" onChange={handleTextInputChange} />

      <label>Email</label>
      <input type="email" value={user.email} name="email" onChange={handleTextInputChange} />

      <label>password</label> 
 <input type="password" value={user.password} name="password" onChange={handleTextInputChange} />
   
   <label>image</label> 
   <input type="file"  name="image" onChange={handleImageChange}/>
  
  <button type='submit'>submit</button>
    </form>
    </>
 
}

export default Register;





