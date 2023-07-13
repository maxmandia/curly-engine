import React from "react";
import { motion } from "framer-motion";
import { ReactComponent as Formclose } from "../assets/form-close.svg";

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
  setShowModal: (showModal: boolean) => void;
}

function AddUserModal(props: AddUserModalProps) {
  const { setShowModal } = props;

  return (
    <motion.div
      className="flex justify-center items-center fixed top-0 left-0 w-full h-full bg-modal-bg bg-opacity-60 z-50"
      variants={backdrop}
      initial="hidden"
      animate="visible"
      exit="hidden"
    >
      <motion.div
        className="bg-[#121623] flex flex-col justify-between gap-3 p-10 rounded-[6px]"
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
        <form action="post" className="flex flex-col gap-2">
          <label className="text-[14px] text-[#D1D4DC]" htmlFor="name">
            Name
          </label>
          <input
            className="text-[#D1D4DC] pl-2 bg-[#0A0C13] rounded-[4px] w-[350px] py-1 border-solid border-[#50535E] border-[1px]"
            type="text"
            name="name"
            placeholder="Name"
          ></input>
          <label className="text-[14px] text-[#D1D4DC]" htmlFor="dob">
            Date of Birth
          </label>
          <input
            className="text-[#D1D4DC] pl-2 bg-[#0A0C13] rounded-[4px] w-[350px] py-1 border-solid border-[#50535E] border-[1px]"
            type="date"
            name="dob"
            placeholder="Date of Birth"
          ></input>
          <label className="text-[14px] text-[#D1D4DC]" htmlFor="phone">
            Phone
          </label>
          <input
            className="text-[#D1D4DC] pl-2 bg-[#0A0C13] rounded-[4px] w-[350px] py-1 border-solid border-[#50535E] border-[1px]"
            type="tel"
            name="phone"
            placeholder="Phone"
          ></input>
          <label className="text-[14px] text-[#D1D4DC]" htmlFor="email">
            Email
          </label>
          <input
            className="text-[#D1D4DC] pl-2 bg-[#0A0C13] rounded-[4px] w-[350px] py-1 border-solid border-[#50535E] border-[1px]"
            type="email"
            name="email"
            placeholder="Email"
          ></input>
        </form>
        <div className="flex items-center justify-end gap-5 pt-2">
          <button className="text-ritten-blue">Cancel</button>
          <button className="bg-ritten-blue py-2 px-5 rounded-[6px] text-black shadow-user-shadow">
            Add User
          </button>
        </div>
      </motion.div>
    </motion.div>
  );
}

export default AddUserModal;
