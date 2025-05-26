import Image from "next/image";
import React from "react";
import Button from "../Common/Button";
import Link from "next/link";

const Header = () => {
  return (
    <div className="py-10 md:py-20 padding-x flex flex-col-reverse md:flex-row items-center justify-between gap-y-10">
      <div className="w-full lg:w-[55%] flex flex-col items-start gap-5">
        <h1 className="text-[72px] font-semibold">Origin</h1>
        <div className="flex items-center flex-wrap gap-x-8 gap-y-5">
          <p className="secondary-text text-base lg:text-lg">
            By <span className="orangeText">Dan Brown</span>
          </p>
          <p className="secondary-text text-base lg:text-lg">
            Category: <span className="orangeText">Thriller / Suspense</span>
          </p>
        </div>
        <div className="flex items-center flex-wrap gap-x-8 gap-y-5">
          <p className="secondary-text text-base lg:text-lg">
            Total books: <span className="orangeText">100</span>
          </p>
          <p className="secondary-text text-base lg:text-lg">
            Available books: <span className="orangeText">42</span>
          </p>
        </div>
        <p className="secondary-text text-base lg:text-lg">
          Origin is a 2017 mystery-thriller novel by American author Dan Brown.
          It is the fifth installment in the Robert Langdon series, following
          previous bestsellers such as The Da Vinci Code and Angels & Demons.
        </p>
        <Link
          href={`/`}
          className="orangeBg rounded-md px-5 py-3 font-semibold text-black text-sm lg:text-lg mt-3"
        >
          Borrow Book Request
        </Link>
      </div>

      <div className="relative flex items-center justify-start w-full lg:w-[400px] 2xl:w-[450px]">
        <Image
          src={"/dan-brown-book-front-side.png"}
          width={276}
          height={384}
          alt="dan-brown-book-front-side"
          className="z-10"
        />
        <Image
          src={"/dan-brown-book-backside-image.png"}
          width={276}
          height={384}
          alt="dan-brown-book-backside-image"
          className="absolute z-0 right-[4%]"
        />
        {/* dan-brown-book-backside-image */}
      </div>
    </div>
  );
};

export default Header;
