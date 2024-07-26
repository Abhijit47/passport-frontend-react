import axios from 'axios';
import { useState } from 'react';
// import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Profile() {
  // eslint-disable-next-line
  const navigate = useNavigate();

  const [user, setUser] = useState();

  const token = localStorage.getItem('token');
  // useEffect(() => {
  //   if (!token) {
  //     navigate('/login');
  //   }
  // }, [navigate]);

  async function handleGetMe() {
    try {
      const response = await axios.get('http://localhost:9999/api/v1/user/me', {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      // console.log(response);

      if (response.status === 200) {
        // console.log('Get me successful');
        // console.log(response.data.user);
        setUser(response.data.user);
      } else {
        console.log('Get me failed');
      }
    } catch (error) {
      console.error('Something went wrong');
      console.error(error.response.data.message);
    }
  }
  return (
    <div>
      <h1>Profile</h1>
      <div>{JSON.stringify(user, null, 2)}</div>
      <button
        style={{
          textDecoration: 'none',
          border: '1px solid black',
          padding: '5px',
          borderRadius: '5px',
        }}
        onClick={handleGetMe}>
        Get Me
      </button>
    </div>
  );
}
