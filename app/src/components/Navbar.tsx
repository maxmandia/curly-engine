import React, { useState } from "react";
import PrimaryButton from "./PrimaryButton";
import UserInterface from "../interfaces/UserInterface";

interface NavbarProps {
  setShowModal: (showModal: boolean) => void;
  setUsers: React.Dispatch<React.SetStateAction<UserInterface[]>>;
}

function Navbar(props: NavbarProps) {
  const { setShowModal, setUsers } = props;
  const [showSort, setShowSort] = useState(false);
  const [sortBy, setSortBy] = useState("Ascending");

  function handleSort(sortType: string) {
    setUsers((prevUsers) => {
      const sortedUsers = [...prevUsers];
      sortedUsers.sort((a, b) => {
        const dateA = new Date(a.dob);
        const dateB = new Date(b.dob);
        if (sortType === "Ascending") {
          return dateA.getTime() - dateB.getTime();
        } else {
          return dateB.getTime() - dateA.getTime();
        }
      });
      return sortedUsers;
    });

    setSortBy(sortType);
    setShowSort(false);
  }

  return (
    <nav className="py-1 px-8">
      <h2 className="text-[18px] py-5 font-bold">User Roster</h2>
      <div className="flex items-center gap-5">
        <PrimaryButton setShowModal={setShowModal} text="Add New User" />
        <div className="flex items-center gap-2">
          <h5>Sort By:</h5>
          <div>
            <button
              onClick={() => setShowSort(!showSort)}
              className="text-ritten-blue "
            >
              Date of Birth ({sortBy})
            </button>
            {showSort && (
              <div className="absolute flex flex-col justify-center items-start bg-[#121623] shadow-md rounded-md border-solid border-[#363A45] border-[1px]">
                <button
                  onClick={() => handleSort("Ascending")}
                  className={`hover:bg-slate-800 py-2 w-[225px] ${
                    sortBy === "Ascending" ? "text-ritten-blue" : "text-white"
                  }`}
                >
                  Date of Birth (Ascending)
                </button>
                <button
                  onClick={() => handleSort("Descending")}
                  className={`hover:bg-slate-800 py-2 w-[225px] ${
                    sortBy === "Descending" ? "text-ritten-blue" : "text-white"
                  }`}
                >
                  Date of Birth (Descending)
                </button>
              </div>
            )}
          </div>
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
