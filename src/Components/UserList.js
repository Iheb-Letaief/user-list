import React from 'react';
import "../App.css";
import UserItem from './UserItem';

const UserList = ({ users, handleClick }) => {
  const userList = users.map((user) => (
    <UserItem key={user.id} user={user} handleClick={handleClick} />
  ));

  return (
    <div className="container">
      <ul className="userList">{userList}</ul>
    </div>
  );
};

export default UserList;
