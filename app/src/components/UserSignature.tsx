import React from "react";
import UserInterface from "../interfaces/UserInterface";

interface UserSignatureProps {
  selectedUser: UserInterface;
  setIsEditing: React.Dispatch<React.SetStateAction<boolean>>;
}

function UserSignature(props: UserSignatureProps) {
  const { selectedUser, setIsEditing } = props;

  if (!selectedUser) {
    return null;
  }

  return (
    <div className="flex items-center justify-between p-5 border-solid border-b-[2px] border-[#333333]">
      <div>
        <h3 className="text-[18px]">Signature Status:</h3>
        <p
          className={
            selectedUser.signature
              ? "text-[#26A69A] text-[14px]"
              : "text-[#EB5757] text-[14px]"
          }
        >
          {selectedUser.signature
            ? "Has Custom Signature"
            : "Missing Custom Signature"}
        </p>
      </div>
      <button
        onClick={() => {
          setIsEditing(true);
        }}
        className="bg-ritten-blue py-2 px-4 rounded-[6px] text-black sm:text-[14px]"
      >
        {selectedUser.signature ? "View Signature" : "Add Signature"}
      </button>
    </div>
  );
}

export default UserSignature;
