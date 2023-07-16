import React from "react";
import { ReactComponent as Formclose } from "../assets/panel-left-close.svg";
import { ReactComponent as Formopen } from "../assets/panel-left-open.svg";

import UserInterface from "../interfaces/UserInterface";

interface UserCardProps {
  user: UserInterface;
  setSelectedUser: React.Dispatch<React.SetStateAction<UserInterface | null>>;
  selectedUser: UserInterface | null;
}

function UserCard(props: UserCardProps) {
  const { user, setSelectedUser, selectedUser } = props;

  if (!user) {
    return null;
  }

  return (
    <div
      onClick={() =>
        setSelectedUser((prev) => {
          if (prev?.id === user.id) {
            return null;
          }
          return user;
        })
      }
      className={`flex items-center justify-between bg-[#121623] p-4 mb-5 rounded-[8px] cursor-pointer ${
        selectedUser?.id === user.id
          ? "border-solid border-[#1890FF] border-[2px] shadow-user-shadow"
          : "border-transparent border-[2px] border-solid"
      }`}
    >
      <div>
        <h4 className="text-[18px] sm:text-[16px]">{user.name}</h4>
        <h4 className="text-[14px] sm:text-[12px]">DOB: {user.dob}</h4>
      </div>
      <div className="flex items-center gap-3 text-[11px] font-bold cursor-pointer">
        <div
          className={
            user.signature
              ? "bg-[#1B6261] border-solid border-[#26A69A] border-[2px] p-1 px-2 rounded-[4px] sm:text-[9px]"
              : "bg-[#EF5350] bg-opacity-60 border-solid border-[#EF5350] border-[2px] p-1 px-2 rounded-[4px] sm:text-[9px]"
          }
        >
          {user.signature ? "Has Custom Signature" : "Missing Custom Signature"}
        </div>
        {selectedUser?.id === user.id ? <Formopen /> : <Formclose />}
      </div>
    </div>
  );
}

export default UserCard;
