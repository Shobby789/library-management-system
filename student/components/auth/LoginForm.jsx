"use client";
import React, { useState } from "react";
import { FaRegEye } from "react-icons/fa6";
import { FaRegEyeSlash } from "react-icons/fa6";
import Button from "../Common/Button";
import Link from "next/link";
import Image from "next/image";

const LoginForm = () => {
  const [showPass, setShowPass] = useState(false);

  const togglePassword = () => {
    setShowPass((prev) => !prev);
  };

  return (
    <form className="w-full flex flex-col items-start justify-center gap-6 w-full lg:w-[80%] p-6 lg:p-10 xl:p-14 rounded-xl bg-[#12151F]">
      <Image
        src={"/logo.png"}
        width={172}
        height={32}
        className=""
        alt="logo"
      />
      <h1 className="text-[28px] font-semibold leading-8 m-0">
        Welcome Back to the BookWise
      </h1>
      <p className="text-lg leading-6 secondary-text">
        Access the vast collection of resources, and stay updated
      </p>

      <div className="w-full flex flex-col items-start gap-1 mt-3">
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
        <Button text={"Login"} type={"submit"} />
      </div>

      <p className="secondary-text font-medium text-center mt-2 mx-auto">
        Don’t have an account already?{" "}
        <Link href={"/register"} className="orangeText">
          Register here
        </Link>
      </p>
    </form>
  );
};

export default LoginForm;
