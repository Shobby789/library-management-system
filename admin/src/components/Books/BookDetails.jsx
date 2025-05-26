import React from "react";
import { GoArrowLeft } from "react-icons/go";
import BookInfo from "./BookInfo";
import BookSummary from "./BookSummary";
import { useNavigate } from "react-router-dom";

const BookDetails = () => {
  const navigate = useNavigate();
  return (
    <div className="w-full">
      <div className="w-full">
        <button
          type="button"
          onClick={() => navigate(-1)}
          className="bg-white flex items-center gap-1.5 justify-center text-sm font-medium px-4 py-2 rounded-lg"
        >
          <GoArrowLeft className="text-base" />
          Go back
        </button>
      </div>

      <BookInfo />
      <BookSummary />
    </div>
  );
};

export default BookDetails;
