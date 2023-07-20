import React from 'react';
import { IoPersonOutline, IoMailOutline, IoCallOutline, IoLocationOutline, IoHomeSharp } from 'react-icons/io5';
import { Link } from 'react-router-dom';
import './ProfilePage.css';

const ProfilePage = () => {
  return (
    <div className="profile-container">
      <div className="profile-header">
        <Link to="/home" className="home-link">
          <IoHomeSharp className="home-icon" />
          <span className="home-text">Home</span>
        </Link>
        <h2 className="profile-title">Profile Page</h2>
      </div>
      <div className="profile-item">
        <IoPersonOutline className="profile-icon" />
        <label className="profile-label">Name:</label>
        <p className="profile-info"></p>
      </div>
      <div className="profile-item">
        <IoMailOutline className="profile-icon" />
        <label className="profile-label">Email:</label>
        <p className="profile-info"></p>
      </div>
      <div className="profile-item">
        <IoCallOutline className="profile-icon" />
        <label className="profile-label">Phone Number:</label>
        <p className="profile-info"></p>
      </div>
      <div className="profile-item">
        <IoLocationOutline className="profile-icon" />
        <label className="profile-label">Location:</label>
        <p className="profile-info"></p>
      </div>
    </div>
  );
};

export default ProfilePage;
