import React from "react";
import { Link } from "react-router-dom";
import { GoTrash } from "react-icons/go";

const UserList = () => {
  return (
    <div className="w-full bg-white rounded-xl p-6">
      <div className="w-full flex items-center justify-between">
        <h2 className="section-heading">All Users</h2>
        <div className="flex items-center gap-2">
          <span className="secondary-text text-sm">A-Z</span>
          <img
            src="/arrow-swap.png"
            alt="filter icon"
            className="w-[16px] h-[16px]"
          />
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
                Date Joined
              </th>
              <th scope="col" className="px-6 py-4">
                role
              </th>
              <th scope="col" className="px-6 py-4">
                Books Borrowed
              </th>
              <th scope="col" className="px-6 py-4">
                ID No
              </th>
              <th scope="col" className="px-6 py-4">
                ID Card
              </th>
              <th scope="col" className="px-6 py-4">
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            {[1, 2, 3, 4, 5, 6, 7]?.map((user, index) => (
              <tr className="bg-white border-b border-gray-200" key={index}>
                <th
                  scope="row"
                  className="px-6 py-4 font-medium whitespace-nowrap flex items-center gap-2"
                >
                  <img
                    src="/profile01.png"
                    alt="profile01"
                    className="w-[40px] h-[40px]"
                  />
                  <div className="flex flex-col items-start">
                    <span>Darrell Steward</span>
                    <span className="secondary-text font-normal">
                      darrelsteward@gmail.com
                    </span>
                  </div>
                </th>
                <td className="px-6 py-4">Silver</td>
                <td className="px-6 py-4">Laptop</td>
                <td className="px-6 py-4">9</td>
                <td className="px-6 py-4">39849321999</td>
                <td className="px-6 py-4">
                  <Link to={`/`} className="text-blue-500 font-medium">
                    View Card
                  </Link>
                </td>
                <td className="px-6 py-4 text-center">
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

export default UserList;
