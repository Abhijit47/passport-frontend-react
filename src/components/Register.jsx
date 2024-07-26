import axios from 'axios';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

export default function Register() {
  const [user, setUser] = useState({
    name: 'jhon doe',
    email: 'jhon@example.com',
    password: 'admin123',
    phone: '9999911111',
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
        'http://localhost:9999/api/v1/user/register',
        user
      );

      // console.log(response);

      if (response.status === 200) {
        console.log('Registration successful');
        navigate('/login', { replace: true });
      } else {
        console.log('Registration failed');
        navigate('/register', { replace: true });
      }
    } catch (error) {
      console.error('Something went wrong');
      console.error(error.response.data.message);
      navigate('/register', { replace: true });
    }
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor='name'>Name</label>
          <input
            type='text'
            name='name'
            id='name'
            value={user.name}
            onChange={handleChange}
          />
        </div>
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
        <div>
          <label htmlFor='phone'>Phone No</label>
          <input
            type='tel'
            name='phone'
            id='phone'
            value={user.phone}
            onChange={handleChange}
          />
        </div>

        <div>
          <button
            style={{
              textDecoration: 'none',
              border: '1px solid black',
              padding: '5px',
              borderRadius: '5px',
            }}>
            Register
          </button>
        </div>
      </form>

      <div style={{ display: 'flex', gap: '1rem' }}>
        <a
          style={{
            textDecoration: 'none',
            border: '1px solid black',
            padding: '5px',
            borderRadius: '5px',
          }}
          href='http://localhost:9999/api/v1/user/auth/google'>
          Log in GOOGLE
        </a>
        <a
          style={{
            textDecoration: 'none',
            border: '1px solid black',
            padding: '5px',
            borderRadius: '5px',
          }}
          href='http://localhost:9999/api/v1/user/auth/facebook'>
          Log in with Facebook
        </a>
      </div>
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
        to={'/login'}>
        Login
      </Link>
    </div>
  );
}
