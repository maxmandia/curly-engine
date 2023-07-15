import React, { useRef } from "react";
import { ReactComponent as FormClose } from "../assets/form-close.svg";
import UserForm from "./UserForm";
import UserInterface from "../interfaces/UserInterface";

interface EditUserProps {
  selectedUser: UserInterface;
  setIsEditingUser: React.Dispatch<React.SetStateAction<boolean>>;
}

function EditUser(props: EditUserProps) {
  const { selectedUser, setIsEditingUser } = props;
  const nameRef = useRef<HTMLInputElement>(null);
  const dobRef = useRef<HTMLInputElement>(null);
  const phoneRef = useRef<HTMLInputElement>(null);
  const emailRef = useRef<HTMLInputElement>(null);

  if (!selectedUser) {
    return null;
  }

  return (
    <div className="p-5">
      <div className="flex items-center justify-between mb-2">
        <h2 className="text-[20px]">Edit User Information</h2>
        <button
          onClick={() => setIsEditingUser(false)}
          className="p-1 hover:bg-slate-800 rounded-sm"
        >
          <FormClose height={30} width={30} />
        </button>
      </div>
      <UserForm
        selectedUser={selectedUser}
        nameRef={nameRef}
        dobRef={dobRef}
        phoneRef={phoneRef}
        emailRef={emailRef}
      />
      <div className="flex items-center justify-end gap-8 mt-5">
        <button
          // onClick={() => setIsEditing(false)}
          className="text-ritten-blue"
        >
          Cancel
        </button>
        <button
          // onClick={handleSave}
          className="bg-ritten-blue px-4 py-2 rounded-[6px] text-black shadow-user-shadow"
        >
          Save
        </button>
      </div>
    </div>
  );
}

export default EditUser;
