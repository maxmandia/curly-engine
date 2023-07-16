import React, { useRef } from "react";
import { motion } from "framer-motion";
import { ReactComponent as Formclose } from "../assets/form-close.svg";
import addUser from "../api/add-user";
import UserInterface from "../interfaces/UserInterface";
import toast from "react-hot-toast";
import UserForm from "./UserForm";

/*
    NOTE: 

    - We're using useRef instead of useState on form inputs because 
    we don't need real-time validation on the form (only on submission). 
    It's also a good way to eliminate unnecessary re-renders.

*/

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

interface AddUserModalProps {
  setShowModal: React.Dispatch<React.SetStateAction<boolean>>;
  setUsers: React.Dispatch<React.SetStateAction<UserInterface[]>>;
  users: UserInterface[];
}

function AddUserModal(props: AddUserModalProps) {
  const { setShowModal, setUsers, users } = props;
  const nameRef = useRef<HTMLInputElement>(null);
  const dobRef = useRef<HTMLInputElement>(null);
  const phoneRef = useRef<HTMLInputElement>(null);
  const emailRef = useRef<HTMLInputElement>(null);

  async function handleNewUser() {
    try {
      let resp: UserInterface = await addUser({
        id: users.length + 1,
        name: nameRef.current!.value,
        dob: dobRef.current!.value,
        phone: phoneRef.current!.value,
        email: emailRef.current!.value,
        signature: null,
      });
      setUsers((prevUsers: UserInterface[]) => [
        ...prevUsers,
        {
          id: prevUsers.length + 1,
          name: nameRef.current!.value,
          dob: resp.dob,
          phone: phoneRef.current!.value,
          email: emailRef.current!.value,
          signature: null,
        },
      ]);
      setShowModal(false);
      toast.success("User added!");
    } catch (error: any) {
      if (error.message === "missing fields") {
        toast.error("Please fill out all fields.");
        return;
      } else {
        toast.error("Something went wrong.");
        return;
      }
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
        className="bg-[#121623] flex flex-col justify-between gap-3 p-10 min-w-[450px] rounded-[6px] sm:min-w-[350px]"
        variants={modal}
      >
        <div className="flex items-center justify-between">
          <h2 className="text-[20px]">Add New User</h2>
          <button
            onClick={() => setShowModal(false)}
            className="p-1 hover:bg-slate-800 rounded-sm"
          >
            <Formclose />
          </button>
        </div>
        <UserForm
          nameRef={nameRef}
          dobRef={dobRef}
          phoneRef={phoneRef}
          emailRef={emailRef}
        />
        <div className="flex items-center justify-end gap-5 pt-2">
          <button
            onClick={() => setShowModal(false)}
            className="text-ritten-blue"
          >
            Cancel
          </button>
          <button
            onClick={handleNewUser}
            className="bg-ritten-blue py-2 px-5 rounded-[6px] text-black shadow-user-shadow"
          >
            Add User
          </button>
        </div>
      </motion.div>
    </motion.div>
  );
}

export default AddUserModal;
