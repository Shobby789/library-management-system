import React from "react";
import BookCard from "../Common/BookCard";
import Pagination from "./Pagination";

const SearchResultList = () => {
  return (
    <section className="w-full relative padding-x py-10">
      <div className="w-full flex items-center justify-between gap-5 flex-wrap">
        <h2 className="secondary-text font-semibold text-[32px]">
          Search Results
        </h2>

        <div className="w-[212px] h-[38px] bg-[#232839] rounded-[10px] flex items-center justify-center gap-1">
          <label htmlFor="filter" className="text-gray-400">
            Filter by:
          </label>
          <select
            name="filter"
            id="filter"
            className="outline-none bg-[#232839]"
          >
            <option value="department" selected>
              Department
            </option>
            <option value="category">Category</option>
            <option value="department">Department</option>
            <option value="category">Category</option>
            <option value="department">Department</option>
            <option value="category">Category</option>
          </select>
        </div>
      </div>

      <div className="w-full grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 xl:grid-cols-6 gap-10 mt-10 lg:mt-14 pb-10">
        <BookCard />
        <BookCard />
        <BookCard />
        <BookCard />
        <BookCard />
        <BookCard />
        <BookCard />
        <BookCard />
        <BookCard />
        <BookCard />
        <BookCard />
        <BookCard />
      </div>

      <Pagination />
    </section>
  );
};

export default SearchResultList;
