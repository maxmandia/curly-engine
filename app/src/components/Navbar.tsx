import React from "react";
import PrimaryButton from "./PrimaryButton";
function Navbar() {
  return (
    <nav className="py-3 px-8">
      <h2 className="text-[18px] py-5">User Roster</h2>
      <div className="flex items-center gap-5">
        <PrimaryButton text="Add New Users" />
        <div className="flex items-center gap-2">
          <h5>Sort By:</h5>
          <button className="text-ritten-blue">
            Date of Birth (Ascending)
          </button>
        </div>
        <div className="flex items-center gap-2">
          <h5>Filter By:</h5>
          <button className="text-ritten-blue">All users</button>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
