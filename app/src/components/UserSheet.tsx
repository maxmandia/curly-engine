import React from "react";
import { motion } from "framer-motion";

const sheet = {
  hidden: { x: "100vh", opacity: 0 },
  visible: {
    x: "0",
    opacity: 1,
    transition: {
      delay: 0,
      type: "spring",
      stiffness: 300,
      damping: 30,
    },
  },
  exit: {
    x: "100vh",
    opacity: 0,
    transition: {
      type: "spring",
      stiffness: 300,
      damping: 0,
    },
  },
};

function UserSheet() {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      exit="hidden"
      variants={sheet}
      className="bg-[#121623] w-1/2 rounded-[8px]"
    >
      UserSheet
    </motion.div>
  );
}

export default UserSheet;
