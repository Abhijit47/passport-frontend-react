import axios from 'axios';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

export default function Login() {
  const [user, setUser] = useState({
    email: 'jhon@example.com',
    password: 'admin123',
  });

  const navigate = useNavigate();

  function handleChange(e) {
    setUser({ ...user, [e.target.name]: e.target.value });
  }

  async function handleSubmit(e) {
    e.preventDefault();
    // console.log(user);

    try {
      const response = await axios.post(
        'http://localhost:9999/api/v1/user/login',
        user
      );
      // console.log(response.data);

      // Save token in local storage
      localStorage.setItem('token', response.data.token);

      // Redirect to homepage
      navigate('/profile', { replace: true });
      // window.location.href = '/';
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor='email'>Email</label>
          <input
            type='email'
            name='email'
            id='email'
            value={user.email}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor='password'>Password</label>
          <input
            type='password'
            name='password'
            id='password'
            value={user.password}
            onChange={handleChange}
          />
        </div>

        <button>Login</button>
      </form>
      <Link
        style={{
          display: 'block',
          width: 'fit-content',
          marginTop: '1rem',
          textDecoration: 'none',
          border: '1px solid black',
          padding: '5px',
          borderRadius: '5px',
        }}
        to={'/register'}>
        Register
      </Link>
    </div>
  );
}
