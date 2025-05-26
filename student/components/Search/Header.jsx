import React from "react";
import { IoSearch } from "react-icons/io5";

const Header = () => {
  return (
    <section className="w-full py-10 md:py-20 padding-x text-center flex flex-col items-center gap-5">
      <p className="uppercase text-lg font-semibold">
        Discover Your Next Great Read:
      </p>
      <h1 className="text-[36px] md:text-[56px] font-semibold leading-[44px] md:leading-[64px] lg:w-[80%] xl:w-[60%] mx-auto">
        Explore and Search for Any Book In Our Library
      </h1>
      <div className="w-full lg:w-[80%] xl:w-[60%] mx-auto bg-[#232839] flex items-center gap-3 rounded-[10px] h-[68px] px-4 md:px-6 mt-5">
        <IoSearch className="orangeText text-2xl" />
        <input
          type="text"
          placeholder="Triller Mystery!"
          className="w-full bg-transparent h-full outline-none"
        />
      </div>
    </section>
  );
};

export default Header;
