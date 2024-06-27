import React from 'react';
import { useNavigate } from 'react-router-dom';
import './LogOut.css'; // Import the CSS file for styling

const LogOut = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('token');
    navigate('/login');
  };

  return (
    <div className="logout-container">
      <div className="logout-form">
        <h2>Are you sure you want to log out?</h2>
        <button className="btn btn-primary" onClick={handleLogout}>Log Out</button>
      </div>
    </div>
  );
};

export default LogOut;
