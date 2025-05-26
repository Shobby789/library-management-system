import React from "react";
import PersonalInfo from "./PersonalInfo";
import BorrowdBookList from "./BorrowdBookList";

const ProfilePage = () => {
  return (
    <div className="w-full py-10 md:py-20 padding-x">
      <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-10 2xl:gap-x-20">
        <div className="w-full">
          <PersonalInfo />
        </div>
        <div className="w-full">
          <BorrowdBookList />
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
