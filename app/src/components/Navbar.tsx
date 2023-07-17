import React, { useState } from "react";
import UserInterface from "../interfaces/UserInterface";
import getUsers from "../api/get-users";

interface NavbarProps {
  setShowModal: (showModal: boolean) => void;
  setUsers: React.Dispatch<React.SetStateAction<UserInterface[]>>;
}

function Navbar(props: NavbarProps) {
  const { setShowModal, setUsers } = props;
  const [showSort, setShowSort] = useState(false);
  const [showFilter, setShowFilter] = useState(false);
  const [filterBy, setFilterBy] = useState("All-Users");
  const [sortBy, setSortBy] = useState("");

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

  async function handleFilter(filterType: string) {
    let resp;
    try {
      resp = await getUsers();
    } catch (error) {
      console.log(error);
    }

    if (filterType === "All-Users") {
      setUsers(resp);
      setFilterBy("All-Users");
      setShowFilter(false);
    } else if (filterType === "Custom") {
      let filteredUsers = resp.filter((user: UserInterface) => {
        return user.signature !== null;
      });
      setUsers(filteredUsers);
      setFilterBy("Custom");
      setShowFilter(false);
    } else {
      let filteredUsers = resp.filter((user: UserInterface) => {
        return user.signature === null;
      });
      setUsers(filteredUsers);
      setFilterBy("No-Custom");
      setShowFilter(false);
    }
  }

  function getButtonText() {
    switch (filterBy) {
      case "All-Users":
        return "All Users";
      case "Custom":
        return "Users With Custom Signatures";
      case "No-Custom":
        return "Users Without Custom Signatures";
      default:
        return "All Users";
    }
  }

  return (
    <nav className="py-1 px-8">
      <h2 className="text-[18px] py-5 font-bold">User Roster</h2>
      <div className="flex items-center gap-5 sm:gap-1 sm:flex-wrap">
        <div className="sm:mb-1">
          <button
            onClick={() => setShowModal(true)}
            className="bg-ritten-blue text-black py-[6px] px-[20px] rounded-[6px]"
          >
            Add New User
          </button>
        </div>
        <div className="flex items-center gap-2">
          <h5>Sort By:</h5>
          <div>
            <button
              onClick={() => {
                if (showFilter) {
                  setShowFilter(false);
                }
                setShowSort(!showSort);
              }}
              className="text-ritten-blue "
            >
              {sortBy === ""
                ? "Date of Birth (Ascending)"
                : `Date of Birth (${sortBy})`}
            </button>
            {showSort && (
              <div className="z-50 absolute flex flex-col justify-center items-start bg-[#121623] shadow-md rounded-md border-solid border-[#363A45] border-[1px]">
                <button
                  onClick={() => handleSort("Ascending")}
                  className={`hover:bg-slate-800 py-2 w-[225px] pl-3 text-left ${
                    sortBy === "Ascending" ? "text-ritten-blue" : "text-white"
                  }`}
                >
                  Date of Birth (Ascending)
                </button>
                <button
                  onClick={() => handleSort("Descending")}
                  className={`hover:bg-slate-800 py-2 w-[225px] pl-3 text-left ${
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
          <div>
            <button
              onClick={() => {
                if (showSort) {
                  setShowSort(false);
                }
                setShowFilter(!showFilter);
              }}
              className="text-ritten-blue"
            >
              {getButtonText()}
            </button>
            {showFilter && (
              <div className="z-50 absolute flex flex-col justify-center items-start bg-[#121623] shadow-md rounded-md border-solid border-[#363A45] border-[1px]">
                <button
                  onClick={() => handleFilter("All-Users")}
                  className={`hover:bg-slate-800 py-2 w-[300px] pl-3 text-left ${
                    filterBy === "All-Users" ? "text-ritten-blue" : "text-white"
                  }`}
                >
                  All Users
                </button>
                <button
                  onClick={() => handleFilter("Custom")}
                  className={`hover:bg-slate-800 py-2 w-[300px] pl-3 text-left ${
                    filterBy === "Custom" ? "text-ritten-blue" : "text-white"
                  }`}
                >
                  Users With Custom Signatures
                </button>
                <button
                  onClick={() => handleFilter("No-Custom")}
                  className={`hover:bg-slate-800 py-2 w-[300px] pl-3 text-left ${
                    filterBy === "No-Custom" ? "text-ritten-blue" : "text-white"
                  }`}
                >
                  Users Without Custom Signatures
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
