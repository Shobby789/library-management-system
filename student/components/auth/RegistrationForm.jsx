"use client";
import React, { useState } from "react";
import { FaRegEye } from "react-icons/fa6";
import { FaRegEyeSlash } from "react-icons/fa6";
import Button from "../Common/Button";
import Link from "next/link";
import Image from "next/image";

const RegistrationForm = () => {
  const [showPass, setShowPass] = useState(false);

  const togglePassword = () => {
    setShowPass((prev) => !prev);
  };

  return (
    <form className="w-full flex flex-col items-start justify-center gap-6 md:w-[80%] p-6 lg:p-10 xl:p-14 rounded-xl bg-[#12151F]">
      <Image
        src={"/logo.png"}
        width={172}
        height={32}
        className=""
        alt="logo"
      />
      <h1 className="text-[28px] font-semibold leading-8 m-0">
        Create Your Library Account
      </h1>
      <p className="text-lg leading-6 secondary-text">
        Please complete all fields and upload a valid university ID to gain
        access to the library
      </p>

      <div className="w-full flex flex-col items-start gap-1 mt-3">
        <label htmlFor="name" className="secondary-text">
          Full name
        </label>
        <input
          type="text"
          name="name"
          id="name"
          className="bg-[#232839] p-3 secondary-text w-full outline-none rounded-md"
          placeholder="adrian@jsmastery.pro"
        />
      </div>
      <div className="w-full flex flex-col items-start gap-1">
        <label htmlFor="email" className="secondary-text">
          Email
        </label>
        <input
          type="email"
          name="email"
          id="email"
          className="bg-[#232839] p-3 secondary-text w-full outline-none rounded-md"
          placeholder="adrian@jsmastery.pro"
        />
      </div>
      <div className="w-full flex flex-col items-start gap-1">
        <label htmlFor="idNumber" className="secondary-text">
          University ID Number
        </label>
        <input
          type="text"
          name="idNumber"
          id="idNumber"
          className="bg-[#232839] p-3 secondary-text w-full outline-none rounded-md"
          placeholder="eg: 394365762"
        />
      </div>
      <div className="w-full flex flex-col items-start gap-1">
        <label htmlFor="password" className="secondary-text">
          Password
        </label>
        <div className="w-full bg-[#232839] p-3 flex items-center justify-between gap-1.5 rounded-md">
          <input
            type={showPass ? "text" : "password"}
            name="password"
            id="password"
            className="secondary-text w-full outline-none bg-transparent"
            placeholder="Atleast 8 characters long"
          />
          <button type="button" onClick={() => togglePassword()}>
            {showPass ? (
              <FaRegEyeSlash className="secondary-text text-base" />
            ) : (
              <FaRegEye className="secondary-text text-base" />
            )}
          </button>
        </div>
      </div>

      <div className="w-full mt-2">
        <Button text={"Register"} type={"submit"} />
      </div>

      <p className="secondary-text font-medium text-center mt-2 mx-auto">
        Already have an account?{" "}
        <Link href={"/login"} className="orangeText">
          Login
        </Link>
      </p>
    </form>
  );
};

export default RegistrationForm;
