import React from "react";
import { motion } from "framer-motion";
import { ReactComponent as FormClose } from "../assets/form-close.svg";
import deleteUser from "../api/delete-user";
import UserInterface from "../interfaces/UserInterface";
import toast from "react-hot-toast";

const backdrop = {
  visible: { opacity: 1 },
  hidden: { opacity: 0 },
};

const modal = {
  hidden: { y: "100vh", opacity: 0 },
  visible: {
    y: "0",
    opacity: 1,
    transition: {
      delay: 0,
      type: "spring",
      stiffness: 300,
      damping: 30,
    },
  },
  exit: {
    y: "100vh",
    opacity: 0,
    transition: {
      type: "spring",
      stiffness: 300,
      damping: 30,
    },
  },
};

interface DeleteUserModalProps {
  setShowDeleteModal: React.Dispatch<React.SetStateAction<boolean>>;
  selectedUser: UserInterface | null;
  setUsers: React.Dispatch<React.SetStateAction<UserInterface[]>>;
  setSelectedUser: React.Dispatch<React.SetStateAction<UserInterface | null>>;
}

function DeleteUserModal(props: DeleteUserModalProps) {
  const { setShowDeleteModal, selectedUser, setUsers, setSelectedUser } = props;

  async function handleUserDelete() {
    if (selectedUser === null) return;

    try {
      await deleteUser(selectedUser.id);
      setUsers((prev) => prev.filter((user) => user.id !== selectedUser.id));
      setSelectedUser(null);
      setShowDeleteModal(false);
      toast.success("User deleted!");
    } catch (error) {
      toast.error("Error deleting user");
      console.log(error);
    }
  }

  return (
    <motion.div
      className="flex justify-center items-center fixed top-0 left-0 w-full h-full bg-modal-bg bg-opacity-60 z-50"
      variants={backdrop}
      initial="hidden"
      animate="visible"
      exit="hidden"
    >
      <motion.div
        className="bg-[#121623] flex flex-col justify-between gap-10 p-10 rounded-[6px]"
        variants={modal}
      >
        <div className="flex items-center justify-between">
          <h2 className="font-bold">Confirm Delete</h2>
          <button
            onClick={() => setShowDeleteModal(false)}
            className="p-1 hover:bg-slate-800 rounded-sm"
          >
            <FormClose />
          </button>
        </div>
        <p>Are you sure you want to delete?</p>
        <div className="flex justify-end gap-2">
          <button
            onClick={() => setShowDeleteModal(false)}
            className="text-ritten-blue px-4 py-2 rounded-[4px]"
          >
            Cancel
          </button>
          <button
            onClick={handleUserDelete}
            className="bg-ritten-blue text-black px-6 py-2 rounded-[4px] shadow-user-shadow"
          >
            OK
          </button>
        </div>
      </motion.div>
    </motion.div>
  );
}

export default DeleteUserModal;
