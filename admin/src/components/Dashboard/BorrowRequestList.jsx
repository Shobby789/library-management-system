import React from "react";
import { Link } from "react-router-dom";
import ListCard from "./ListCard";

const BorrowRequestList = () => {
  return (
    <div className="w-full bg-white p-5 rounded-xl">
      <div className="w-full flex items-center justify-between">
        <h2 className="text-[20px] font-semibold">Borrow Requests</h2>
        <Link
          to={"/borrow-requests"}
          className="text-[#25388C] bg-[#25388C]/10 text-sm font-semibold px-3 py-2 rounded-lg"
        >
          View all
        </Link>
      </div>
      <div className="w-full mt-5 flex flex-col items-start gap-3">
        <ListCard />
        <ListCard />
        <ListCard />
      </div>
    </div>
  );
};

export default BorrowRequestList;
