import React from "react";
import BookCard from "../Common/BookCard";

const Listing = () => {
  return (
    <section className="w-full relative padding-x py-10">
      <h2 className="secondary-text font-semibold text-[32px]">
        Popular Books
      </h2>

      <div className="w-full grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 xl:grid-cols-6 gap-10 mt-10 lg:mt-14 pb-10">
        <BookCard />
        <BookCard />
        <BookCard />
        <BookCard />
        <BookCard />
        <BookCard />
      </div>
    </section>
  );
};

export default Listing;
