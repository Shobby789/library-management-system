import React from "react";
import { IoCalendarOutline } from "react-icons/io5";
import { CiEdit } from "react-icons/ci";

const BookInfo = () => {
  return (
    <div className="w-full mt-5 flex items-start gap-5">
      <div className="w-[250px] h-[250px] rounded-xl bg-white flex items-center justify-center">
        <img src="/book01.png" alt="book" className="w-[125px] h-[174px]" />
      </div>

      <div className="flex flex-col items-start justify-between gap-6 w-full">
        <div className="w-full flex items-center gap-2">
          <p className="secondary-text text-sm">Created at:</p>
          <div className="flex items-center gap-2">
            <IoCalendarOutline className="secondary-text text-base" />
            <span className="secondary-text text-base">12/01/24</span>
          </div>
        </div>
        <h3 className="text-[24px] font-semibold">
          Jayne Castle - People in Glass Houses
        </h3>
        <h4 className="text-lg font-semibold">By Jayne Ann Krentz</h4>
        <p className="secondary-text text-sm">Strategic, Fantasy</p>

        <button
          type="button"
          className="primary-bg text-white py-2 text-sm flex items-center justify-center gap-2 font-bold rounded-lg w-full lg:w-[422px]"
        >
          <CiEdit className="text-xl" /> Edit Book
        </button>
      </div>
    </div>
  );
};

export default BookInfo;
