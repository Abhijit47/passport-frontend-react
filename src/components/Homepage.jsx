import { Link } from 'react-router-dom';

export default function Homepage() {
  return (
    <div
      style={{
        display: 'flex',
        gap: '1rem',
      }}>
      Homepage
      <Link
        style={{
          textDecoration: 'none',
          border: '1px solid black',
          padding: '5px',
          borderRadius: '5px',
        }}
        to={'/login'}>
        Login
      </Link>
      <Link
        style={{
          textDecoration: 'none',
          border: '1px solid black',
          padding: '5px',
          borderRadius: '5px',
        }}
        to={'/register'}>
        Register
      </Link>
      <Link
        style={{
          textDecoration: 'none',
          border: '1px solid black',
          padding: '5px',
          borderRadius: '5px',
        }}
        to={'/profile'}>
        Profile
      </Link>
    </div>
  );
}
