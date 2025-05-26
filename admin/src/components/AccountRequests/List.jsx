import React, { useState } from "react";
import { Link } from "react-router-dom";
import { RxCross2 } from "react-icons/rx";
import RequestAcceptModal from "./RequestAcceptModal";
import RequestRejectModal from "./RequestRejectModal";

const List = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [approveModal, setApproveModal] = useState(false);

  const toggleApproveMdal = () => {
    setApproveModal((prev) => !prev);
  };

  const toggleModal = () => {
    setIsOpen((prev) => !prev);
  };

  const denyRequest = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <>
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
                University ID No
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
                <td className="px-6 py-4">Dec 19 2023</td>
                <td className="px-6 py-4">39849321999</td>
                <td className="px-6 py-4">
                  <Link to={`/`} className="text-blue-500 font-medium">
                    View Card
                  </Link>
                </td>
                <td className="px-6 py-4 text-center flex items-center gap-4">
                  <button
                    type="button"
                    onClick={() => toggleApproveMdal()}
                    className="text-xs text-[#027A48] font-semibold bg-[#027A48]/10 px-3 py-2 rounded-lg"
                  >
                    Approve Account
                  </button>
                  <button
                    type="button"
                    onClick={() => toggleModal()}
                    className="bg-red-100 rounded-full w-6 h-6 p-1"
                  >
                    <RxCross2 className="text-base text-red-500 w-full h-full" />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <RequestAcceptModal
        isOpen={isOpen}
        onclick={denyRequest}
        onclose={toggleModal}
      />
      <RequestRejectModal
        isOpen={approveModal}
        onclick={toggleApproveMdal}
        onclose={toggleApproveMdal}
      />
    </>
  );
};

export default List;
