import { useState } from "react";
import "./App.css";
import usersData from "./mock.json";
import UserDescription from "./Components/UserDescription";
import UserList from "./Components/UserList";

export default function App() {
  const users = usersData.users;
  const [selectedUser, setSelectedUser] = useState(null);

  const handleClick = (user) => {
    setSelectedUser(user);
  };

  return (
    <div>
      <div className="selectedUser">
        {selectedUser && <UserDescription selectedUser={selectedUser} />}
      </div>
      <UserList users={users} handleClick={handleClick} />}
    </div>
  );
}
