import React from "react";
import { GoTrash } from "react-icons/go";
import { RiEditLine } from "react-icons/ri";
import List from "./List";

const AccountRequestList = () => {
  return (
    <div className="w-full bg-white rounded-xl p-6">
      <div className="w-full flex items-center justify-between">
        <h2 className="section-heading">Account Registration Requests</h2>
        <div className="flex items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <span className="secondary-text text-sm">Oldest to Recent</span>
            <img
              src="/arrow-swap.png"
              alt="filter icon"
              className="w-[16px] h-[16px]"
            />
          </div>
        </div>
      </div>

      <List />
    </div>
  );
};

export default AccountRequestList;
