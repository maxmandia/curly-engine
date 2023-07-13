import React from "react";
import { ReactComponent as Formclose } from "../assets/panel-left-close.svg";
function UserCard() {
  return (
    <div className="flex items-center justify-between bg-[#121623] mx-8 p-4 mt-5 rounded-[8px]">
      <div>
        <h4 className="text-[18px]">name</h4>
        <h4 className="text-[14px]">DOB: idk</h4>
      </div>
      <div className="flex items-center">
        <button>Missing idk</button>
        <Formclose />
      </div>
    </div>
  );
}

export default UserCard;
