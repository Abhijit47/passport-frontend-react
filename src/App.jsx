import { Route, Routes } from 'react-router-dom';
import Homepage from './components/Homepage';
import Login from './components/Login';
import Profile from './components/Profile';
import Register from './components/Register';

export default function App() {
  return (
    <>
      <Routes>
        <Route path={'/'} element={<Homepage />} />
        <Route path={'/login'} element={<Login />} />
        <Route path={'/register'} element={<Register />} />
        <Route path={'/profile'} element={<Profile />} />
      </Routes>
    </>
  );
}
