import React, { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import UserCard from "./components/UserCard";
import UserInterface from "./interfaces/UserInterface";
import AddUserModal from "./components/AddUserModal";
import { AnimatePresence } from "framer-motion";
import { Toaster } from "react-hot-toast";
import UserSheet from "./components/UserSheet";
import DeleteUserModal from "./components/DeleteUserModal";
import getUsers from "./api/get-users";

function App() {
  const [users, setUsers] = useState<UserInterface[]>([]);
  const [showModal, setShowModal] = useState(false);
  const [selectedUser, setSelectedUser] = useState<UserInterface | null>(null);
  const [showDeleteModal, setShowDeleteModal] = useState<Boolean>(false);

  async function fetchUsers() {
    try {
      let resp = await getUsers();
      setUsers(resp);
    } catch (error) {
      console.log(error);
    }
  }

  // fetch users on mount
  useEffect(() => {
    fetchUsers();
  }, []);

  /*
    When we update a user's signature, we need to update that user in the users array.
    This effect will run when the users array changes, and will update the selectedUser
    to ensure that the user sheet is updated with the new signature.
  */
  useEffect(() => {
    if (users && selectedUser) {
      const user = users.find((user) => user.id === selectedUser.id);
      if (user) {
        setSelectedUser(user);
      }
    }
  }, [users]);

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
      <Navbar setUsers={setUsers} setShowModal={setShowModal} />
      <div
        className={
          selectedUser
            ? "flex justify-between mt-3 mx-8"
            : "block mt-3 mx-8 gap-10"
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
              setUsers={setUsers}
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
