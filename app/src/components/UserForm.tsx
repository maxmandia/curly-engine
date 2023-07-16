import React, { useRef } from "react";
import UserInterface from "../interfaces/UserInterface";

interface UserFormProps {
  nameRef: React.MutableRefObject<HTMLInputElement | null>;
  dobRef: React.MutableRefObject<HTMLInputElement | null>;
  phoneRef: React.MutableRefObject<HTMLInputElement | null>;
  emailRef: React.MutableRefObject<HTMLInputElement | null>;
  selectedUser?: UserInterface;
}

function UserForm(props: UserFormProps) {
  const { nameRef, dobRef, phoneRef, emailRef, selectedUser } = props;

  return (
    <form action="post" className="flex flex-col gap-2">
      <label className="text-[14px] text-[#D1D4DC]" htmlFor="name">
        Name
      </label>
      <input
        ref={nameRef}
        className="text-[#D1D4DC] pl-2 bg-[#0A0C13] rounded-[4px] w-full py-1 border-solid border-[#50535E] border-[1px]"
        type="text"
        name="name"
        placeholder={selectedUser?.name || "Name"}
      ></input>
      <label className="text-[14px] text-[#D1D4DC]" htmlFor="dob">
        Date of Birth
      </label>
      <input
        ref={dobRef}
        className="text-[#D1D4DC] pl-2 bg-[#0A0C13] rounded-[4px] w-full py-1 border-solid border-[#50535E] border-[1px]"
        type="text"
        name="dob"
        placeholder={selectedUser?.dob || "Date of Birth"}
      ></input>
      <label className="text-[14px] text-[#D1D4DC]" htmlFor="phone">
        Phone
      </label>
      <input
        ref={phoneRef}
        className="text-[#D1D4DC] pl-2 bg-[#0A0C13] rounded-[4px] w-full py-1 border-solid border-[#50535E] border-[1px]"
        type="tel"
        name="phone"
        placeholder={selectedUser?.phone || "Phone"}
      ></input>
      <label className="text-[14px] text-[#D1D4DC]" htmlFor="email">
        Email
      </label>
      <input
        ref={emailRef}
        className="text-[#D1D4DC] pl-2 bg-[#0A0C13] rounded-[4px] w-full py-1 border-solid border-[#50535E] border-[1px]"
        type="email"
        name="email"
        placeholder={selectedUser?.email || "Email"}
      ></input>
    </form>
  );
}

export default UserForm;
