import React, { useRef, useState } from "react";
import { HiOutlineMenuAlt2 } from "react-icons/hi";
import Sidebar from "./Sidebar";
import { IoSearchOutline } from "react-icons/io5";

const Layout = ({ page }) => {
  const sidebarRef = useRef(null);
  const [isOpen, setisOpen] = useState(false);
  const toggleModal = () => {
    setisOpen(!isOpen);
  };
  return (
    <div className="w-screen h-screen flex justify-start items-start">
      <div
        onClick={toggleModal}
        className={`w-screen h-screen fixed top-0 left-0 transition-all duration-500  ${
          isOpen ? " lg:translate-x-0" : "-translate-x-full lg:translate-x-0"
        } lg:static  z-[2000] lg:z-auto px-3 lg:w-60 xl:w-72 flex flex-col gap-3 items-center justify-start py-0 lg:h-full `}
      >
        <div
          ref={sidebarRef}
          className={`fixed top-0 left-0 transition-all duration-200  ${
            isOpen ? " lg:translate-x-0" : "-translate-x-full lg:translate-x-0"
          } lg:static w-[60%] md:w-[30%] z-[2000] lg:z-auto lg:w-60 xl:w-72 flex flex-col gap-3 items-center justify-start py-0 h-full bg-white border-r border-gray-200 `}
        >
          <Sidebar />
        </div>
      </div>

      <div className="w-full lg:w-[calc(100%-15rem)] xl:w-[calc(100%-18rem)] h-full  overflow-y-auto overflow-x-hidden">
        <div className="sticky top-0 left-0 w-full h-24 bg-gray-50 flex items-center justify-between px-4 z-20">
          <button
            onClick={() => setisOpen((prev) => !prev)}
            className="lg:hidden block"
          >
            <HiOutlineMenuAlt2 className="text-2xl" />
          </button>
          <div className="">
            <p className="text-2xl font-semibold mb-1.5">Welcome Adrian!</p>
            <p className="secondary-text">
              Monitor all of your projects and tasks here
            </p>
          </div>
          <div className="flex gap-3 items-center justify-end h-12 rounded-xl bg-white w-[35%] px-3.5">
            <IoSearchOutline className="text-xl secondary-text" />
            <input
              type="text"
              placeholder="Search users, books by title, author, or genre."
              className="w-full h-full outline-none text-sm secondary-text"
            />
          </div>
        </div>
        <div className="w-full p-4 bg-gray-50">{page}</div>
      </div>
    </div>
  );
};

export default Layout;
