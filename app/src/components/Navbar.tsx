import React from "react";
import PrimaryButton from "./PrimaryButton";

interface NavbarProps {
  setShowModal: (showModal: boolean) => void;
}

function Navbar(props: NavbarProps) {
  const { setShowModal } = props;

  return (
    <nav className="py-3 px-8">
      <h2 className="text-[18px] py-5 font-bold">User Roster</h2>
      <div className="flex items-center gap-5">
        <PrimaryButton setShowModal={setShowModal} text="Add New User" />
        <div className="flex items-center gap-2">
          <h5>Sort By:</h5>
          <button className="text-ritten-blue ">
            Date of Birth (Ascending)
          </button>
        </div>
        <div className="flex items-center gap-2">
          <h5>Filter By:</h5>
          <button className="text-ritten-blue">All Users</button>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
