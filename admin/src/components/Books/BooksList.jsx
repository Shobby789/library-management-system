import React from "react";
import { GoTrash } from "react-icons/go";
import { RiEditLine } from "react-icons/ri";
import { Link, useNavigate } from "react-router-dom";

const BooksList = () => {
  const navigate = useNavigate();

  return (
    <div className="w-full bg-white rounded-xl p-6">
      <div className="w-full flex items-center justify-between">
        <h2 className="section-heading">All Books</h2>
        <div className="flex items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <span className="secondary-text text-sm">A-Z</span>
            <img
              src="/arrow-swap.png"
              alt="filter icon"
              className="w-[16px] h-[16px]"
            />
          </div>
          <Link
            to="/add-book"
            className="text-sm font-medium text-white primary-bg px-3 py-2 rounded-lg"
          >
            + Create a New Book
          </Link>
        </div>
      </div>

      <div className="relative overflow-x-auto my-5">
        <table className="w-full text-sm text-left rtl:text-righ">
          <thead className="text-xs text-[#3A354E] bg-[#F8F8FF]">
            <tr>
              <th scope="col" className="px-6 py-4">
                Name
              </th>
              <th scope="col" className="px-6 py-4">
                Author
              </th>
              <th scope="col" className="px-6 py-4">
                Genre
              </th>
              <th scope="col" className="px-6 py-4">
                Date Created
              </th>
              <th scope="col" className="px-6 py-4">
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            {[1, 2, 3, 4, 5, 6, 7]?.map((_, index) => (
              <tr
                className="bg-white border-b border-gray-200 cursor-pointer"
                key={index}
                onClick={() => navigate("/books/owihoiwrh98r39ry3")}
              >
                <th
                  scope="row"
                  className="px-6 py-4 font-medium whitespace-nowrap flex items-center gap-2"
                >
                  <img
                    src="/book01.png"
                    alt="book01"
                    className="w-[29px] h-[40px]"
                  />
                  <div className="">
                    <span>The Great Reclamation: A Novel by</span>
                  </div>
                </th>
                <td className="px-6 py-4">Rachel Hxeng</td>
                <td className="px-6 py-4">Strategic, Fantasy</td>
                <td className="px-6 py-4">Dec 19 2023</td>
                <td className="px-6 text-center flex gap-2">
                  <button type="button">
                    <RiEditLine className="text-[17px] text-blue-500" />
                  </button>
                  <button type="button">
                    <GoTrash className="text-base text-red-500" />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default BooksList;
