import LoginForm from "@/components/auth/LoginForm";
import Image from "next/image";
import React from "react";

export const metadata = {
  title: "Login",
  description: "Library Management System Register Page",
};

const page = () => {
  return (
    <div className="w-full grid grid-cols-1 lg:grid-cols-2 min-h-screen">
      <div className="h-full w-full flex items-center justify-center py-20 lg:py-0 px-4 lg:px-10 2xl:px-20">
        <LoginForm />
      </div>
      <div className="h-screen w-full hidden lg:block">
        <Image
          src={"/auth-page-image.png"}
          width={700}
          height={1110}
          alt="login page image"
          className="w-full h-full object-cover"
        />
      </div>
    </div>
  );
};

export default page;
