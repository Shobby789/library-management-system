import Image from "next/image";
import React from "react";

const BookCard = () => {
  return (
    <div className="w-full relative mx-auto">
      <Image
        src={"/dan-brown-book-image.png"}
        width={160}
        height={293}
        alt="dan-brown-book-image"
        className="object-contain lg:w-[113px] 2xl:w-[133px]"
      />
      <h3 className="font-semibold mt-3 mb-1">Origin - By Dan Brown</h3>
      <p className="text-sm text-gray-400 font-medium">Thriller / Mystery</p>
    </div>
  );
};

export default BookCard;
