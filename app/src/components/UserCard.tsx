import React from "react";
import { ReactComponent as Formclose } from "../assets/panel-left-close.svg";
import UserInterface from "../interfaces/UserInterface";

interface UserCardProps {
  user: UserInterface;
}

function UserCard(props: UserCardProps) {
  const { user } = props;

  if (!user) {
    return null;
  }

  return (
    <div className="flex items-center justify-between bg-[#121623] mx-8 p-4 mt-5 rounded-[8px] cursor-pointer">
      <div>
        <h4 className="text-[18px]">{user.name}</h4>
        <h4 className="text-[14px]">DOB: {user.dob}</h4>
      </div>
      <div className="flex items-center gap-3 text-[11px] font-bold cursor-pointer">
        <div
          className={
            user.signature
              ? "bg-[#1B6261] border-solid border-[#26A69A] border-[2px] p-1 px-2 rounded-[4px]"
              : "bg-[#EF5350] bg-opacity-60 border-solid border-[#EF5350] border-[2px] p-1 px-2 rounded-[4px]"
          }
        >
          {user.signature ? "Has Custom Signature" : "Missing Custom Signature"}
        </div>
        <Formclose className="" />
      </div>
    </div>
  );
}

export default UserCard;
