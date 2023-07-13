import React, { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import UserCard from "./components/UserCard";
import UserInterface from "./interfaces/UserInterface";
import AddUserModal from "./components/AddUserModal";

function App() {
  const [users, setUsers] = useState<UserInterface[]>([]);
  const [showModal, setShowModal] = useState(false);

  async function fetchUsers() {
    try {
      const response = await fetch("http://localhost:3001/users");
      const data = await response.json();
      setUsers(data);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    fetchUsers();
  }, []);

  return (
    <div className="h-screen text-white font-circular">
      {showModal && <AddUserModal />}
      <Navbar setShowModal={setShowModal} />
      {users
        ? users.map((user) => <UserCard key={user.id} user={user} />)
        : null}
    </div>
  );
}

export default App;
