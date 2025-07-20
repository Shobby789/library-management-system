"use client";
import React, { useState } from "react";
import { FaRegEye } from "react-icons/fa6";
import { FaRegEyeSlash } from "react-icons/fa6";
import Button from "../Common/Button";
import Link from "next/link";
import Image from "next/image";
import { useFormik } from "formik";
import { useRouter } from "next/navigation";

const validate = (values) => {
  const errors = {};

  if (!values.fullName) {
    errors.fullName = "Name is required";
  } else if (values.fullName.length < 3) {
    errors.fullName = "Name can not be less than 3 characters";
  }

  if (!values.email) {
    errors.email = "Email is required";
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = "Invalid email address";
  }

  if (!values.idNumber) {
    errors.idNumber = "ID number is required";
  } else if (values.idNumber.length !== 13) {
    errors.idNumber = "ID number must contain 13 digits";
  }

  if (!values.password) {
    errors.password = "Password is required";
  } else if (values.password.length < 8) {
    errors.password = "Password cannot be less than 8 characters";
  }

  return errors;
};

const RegistrationForm = () => {
  const [showPass, setShowPass] = useState(false);
  const router = useRouter();
  const [loading, setLoading] = useState(false)

  const togglePassword = () => {
    setShowPass((prev) => !prev);
  };

  const formik = useFormik({
    initialValues: {
      fullName: "",
      email: "",
      idNumber: "",
      password: "",
    },
    validate,
    onSubmit: async (values, { resetForm }) => {
      console.log("values >>>", values);
      resetForm();

      router.push("/login");
    },
  });

  return (
    <form
      onSubmit={formik.handleSubmit}
      className="w-full flex flex-col items-start justify-center gap-6 md:w-[80%]"
    >
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
        <label htmlFor="fullName" className="secondary-text">
          Full name
        </label>
        <input
          type="text"
          name="fullName"
          id="fullName"
          value={formik.values.fullName}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          className="bg-[#232839] p-3 secondary-text w-full outline-none rounded-md"
          placeholder="adrian@jsmastery.pro"
        />
        {formik.touched.fullName && formik.errors.fullName ? (
          <p className="text-red-600 text-sm">{formik.errors.fullName}</p>
        ) : null}
      </div>
      <div className="w-full flex flex-col items-start gap-1">
        <label htmlFor="email" className="secondary-text">
          Email
        </label>
        <input
          type="email"
          name="email"
          id="email"
          value={formik.values.email}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          className="bg-[#232839] p-3 secondary-text w-full outline-none rounded-md"
          placeholder="adrian@jsmastery.pro"
        />
        {formik.touched.email && formik.errors.email ? (
          <p className="text-red-600 text-sm">{formik.errors.email}</p>
        ) : null}
      </div>
      <div className="w-full flex flex-col items-start gap-1">
        <label htmlFor="idNumber" className="secondary-text">
          University ID Number
        </label>
        <input
          type="text"
          name="idNumber"
          id="idNumber"
          value={formik.values.idNumber}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          className="bg-[#232839] p-3 secondary-text w-full outline-none rounded-md"
          placeholder="eg: 394365762"
        />
        {formik.touched.idNumber && formik.errors.idNumber ? (
          <p className="text-red-600 text-sm">{formik.errors.idNumber}</p>
        ) : null}
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
            value={formik.values.password}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            className="secondary-text w-full outline-none bg-transparent"
            placeholder="Atleast 8 characters long"
          />
          <button type="button" onClick={() => togglePassword()}>
            {showPass ? (
              <FaRegEye className="secondary-text text-base" />
            ) : (
              <FaRegEyeSlash className="secondary-text text-base" />
            )}
          </button>
        </div>
        {formik.touched.password && formik.errors.password ? (
          <p className="text-red-600 text-sm">{formik.errors.password}</p>
        ) : null}
      </div>

      <div className="w-full mt-2">
        <Button text={"Register"} type={"submit"} loading={loading}/>
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
