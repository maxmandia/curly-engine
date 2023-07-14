import React, { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import UserCard from "./components/UserCard";
import UserInterface from "./interfaces/UserInterface";
import AddUserModal from "./components/AddUserModal";
import { AnimatePresence } from "framer-motion";
import { Toaster } from "react-hot-toast";
import UserSheet from "./components/UserSheet";
import DeleteUserModal from "./components/DeleteUserModal";

function App() {
  const [users, setUsers] = useState<UserInterface[]>([]);
  const [showModal, setShowModal] = useState(false);
  const [selectedUser, setSelectedUser] = useState<UserInterface | null>(null);
  const [showDeleteModal, setShowDeleteModal] = useState<Boolean>(false);

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
      <Toaster />
      <AnimatePresence mode="wait">
        {showModal && (
          <AddUserModal
            users={users}
            setUsers={setUsers}
            setShowModal={setShowModal}
          />
        )}
        {showDeleteModal && (
          <DeleteUserModal
            setShowDeleteModal={
              setShowDeleteModal as React.Dispatch<
                React.SetStateAction<boolean>
              >
            }
            selectedUser={selectedUser}
            setUsers={setUsers}
            setSelectedUser={setSelectedUser}
          />
        )}
      </AnimatePresence>
      <Navbar setShowModal={setShowModal} />
      <div
        className={
          selectedUser
            ? "flex justify-between mt-5 mx-8"
            : "block mt-5 mx-8 gap-10"
        }
      >
        <div className="min-w-[48%]">
          {users.map((user) => (
            <UserCard
              setSelectedUser={setSelectedUser}
              key={user.id}
              user={user}
            />
          ))}
        </div>
        {selectedUser && (
          <AnimatePresence mode="wait">
            <UserSheet
              setShowDeleteModal={
                setShowDeleteModal as React.Dispatch<
                  React.SetStateAction<boolean>
                >
              }
              setSelectedUser={setSelectedUser}
              selectedUser={selectedUser}
            />
          </AnimatePresence>
        )}
      </div>
    </div>
  );
}

export default App;
