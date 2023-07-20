import React from 'react';
import { useSelector } from 'react-redux';

const UserComponent = () => {
  const user = useSelector(state => state.user); // Assuming you have "user" state in your Redux store

  return (
    <div>
      <h2>User Component</h2>
      {user && (
        <div>
          <p>Name: {user.name}</p>
          <p>Email: {user.email}</p>
        </div>
      )}
    </div>
  );
};

export default UserComponent;
