import React from "react";
import UserInterface from "../interfaces/UserInterface";
import { ReactComponent as Trash } from "../assets/trash.svg";
import { ReactComponent as Edit } from "../assets/edit.svg";
import { ReactComponent as Close } from "../assets/form-close.svg";

interface UserInfoProps {
  selectedUser: UserInterface;
  setSelectedUser: React.Dispatch<React.SetStateAction<UserInterface | null>>;
  setShowDeleteModal: React.Dispatch<React.SetStateAction<boolean>>;
  setIsEditingUser: React.Dispatch<React.SetStateAction<boolean>>;
}

function UserInfo(props: UserInfoProps) {
  const {
    selectedUser,
    setSelectedUser,
    setShowDeleteModal,
    setIsEditingUser,
  } = props;

  if (!selectedUser) {
    return null;
  }

  return (
    <div className="border-solid border-b-[2px] border-[#333333] p-5">
      <div className="flex items-center justify-between">
        <h3 className="text-[20px]">{selectedUser.name}</h3>
        <div className="flex items-center gap-3">
          <button onClick={() => setShowDeleteModal(true)} className="mr-2">
            <Trash height={20} width={20} />
          </button>
          <button onClick={() => setIsEditingUser(true)}>
            <Edit height={20} width={20} />
          </button>
          <button
            onClick={() => {
              setSelectedUser(null);
            }}
          >
            <Close height={35} width={35} />
          </button>
        </div>
      </div>
      <div className="flex items-center gap-3 mt-1 text-[14px]">
        <h5 className="sm:text-[12px]">
          <span className="font-bold">DOB: </span>
          {selectedUser.dob}
        </h5>
        <h5 className="sm:text-[12px]">
          <span className="font-bold">Phone: </span>
          {selectedUser.phone}
        </h5>
        <h5 className="sm:text-[12px]">
          <span className="font-bold">Email: </span>
          {selectedUser.email}
        </h5>
      </div>
    </div>
  );
}

export default UserInfo;
