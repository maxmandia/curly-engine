import React from "react";
import { motion } from "framer-motion";
import UserInterface from "../interfaces/UserInterface";
import UserInfo from "./UserInfo";
import UserSignature from "./UserSignature";
import EditSignature from "./EditSignature";

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

interface UserSheetProps {
  selectedUser: UserInterface;
  setSelectedUser: React.Dispatch<React.SetStateAction<UserInterface | null>>;
  setShowDeleteModal: React.Dispatch<React.SetStateAction<boolean>>;
}

function UserSheet(props: UserSheetProps) {
  const { selectedUser, setSelectedUser, setShowDeleteModal } = props;
  const [isEditing, setIsEditing] = React.useState<boolean>(false);

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      exit="hidden"
      variants={sheet}
      className="bg-[#121623] w-1/2 rounded-[8px] h-[80vh] overflow-y-auto]"
    >
      <UserInfo
        setShowDeleteModal={setShowDeleteModal}
        setSelectedUser={setSelectedUser}
        selectedUser={selectedUser}
      />
      {isEditing ? (
        <EditSignature setIsEditing={setIsEditing} />
      ) : (
        <UserSignature
          setIsEditing={setIsEditing}
          selectedUser={selectedUser}
        />
      )}
    </motion.div>
  );
}

export default UserSheet;
