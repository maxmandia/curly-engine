import React, { useRef } from "react";
import { ReactComponent as FormClose } from "../assets/form-close.svg";
import UserForm from "./UserForm";
import UserInterface from "../interfaces/UserInterface";
import editUser from "../api/edit-user";
import toast from "react-hot-toast";

interface EditUserProps {
  selectedUser: UserInterface;
  setIsEditingUser: React.Dispatch<React.SetStateAction<boolean>>;
  setUsers: React.Dispatch<React.SetStateAction<UserInterface[]>>;
}

function EditUser(props: EditUserProps) {
  const { selectedUser, setIsEditingUser, setUsers } = props;
  const nameRef = useRef<HTMLInputElement>(null);
  const dobRef = useRef<HTMLInputElement>(null);
  const phoneRef = useRef<HTMLInputElement>(null);
  const emailRef = useRef<HTMLInputElement>(null);

  if (!selectedUser) {
    return null;
  }

  async function handleSave() {
    const updatedUser: any = {
      id: selectedUser.id,
      name:
        nameRef.current?.value !== selectedUser.name
          ? nameRef.current?.value
          : undefined,
      dob:
        dobRef.current?.value !== selectedUser.dob
          ? dobRef.current?.value
          : undefined,
      phone:
        phoneRef.current?.value !== selectedUser.phone
          ? phoneRef.current?.value
          : undefined,
      email:
        emailRef.current?.value !== selectedUser.email
          ? emailRef.current?.value
          : undefined,
    };

    // filter out undefined values and empty strings
    const filteredUser = Object.keys(updatedUser)
      .filter(
        (key) => updatedUser[key] !== undefined && updatedUser[key] !== ""
      )
      .reduce((obj: any, key) => {
        obj[key] = updatedUser[key];
        return obj;
      }, {});

    try {
      await editUser(filteredUser);
      setUsers((prev) =>
        prev.map((user) => {
          if (user.id === selectedUser.id) {
            return { ...user, ...filteredUser };
          }
          return user;
        })
      );
      setIsEditingUser(false);
      toast.success("User updated successfully!");
    } catch (error) {
      toast.error("Something went wrong");
      console.log(error);
    }
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
          onClick={handleSave}
          className="bg-ritten-blue px-4 py-2 rounded-[6px] text-black shadow-user-shadow"
        >
          Save
        </button>
      </div>
    </div>
  );
}

export default EditUser;
