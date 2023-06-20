import React from "react";
import "../App.css"


const UserItem = ({ user, handleClick }) => {
  return (
    <li>
      <button onClick={() => handleClick(user)}>
        <p>
          <b>{user.firstName}</b>
          <b>{user.lastName}</b>
        </p>
      </button>
    </li>
  );
};

export default UserItem
